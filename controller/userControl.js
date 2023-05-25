const { generateUserToken } = require('../config/jwtToken');
const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const validateMongodbId = require('../utils/validateMongodbId');
const jwt = require('jsonwebtoken');
const { generateUserRefreshToken } = require('../config/refreshToken');


//Registers a new user
const createUser = asyncHandler(async (req, res) => {
        const { email } = req.body;
        const findUser = await User.exists({ email });
        if (!findUser){
            const userDoc = await User.create(req.body);
            res.json(userDoc);
        } else {
            throw new Error('User Already Exists');
        }
    }    
)

//Login a user

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    //Checks if user claimed email address exists
    const userDoc = await User.findOne({ email });
    const userPasswordMatched = await userDoc.isPasswordMatched(password);
    if (userDoc && userPasswordMatched){
        const refreshToken = await generateUserRefreshToken(userDoc?._id);
        const updatedUser = await User.findByIdAndUpdate(
            userDoc.id,
            {
                refreshToken: refreshToken,
            }, 
            { new: true }
            );
            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
                maxAge: 72 * 60 * 60 * 1000,
            });
        res.json({
            _id: userDoc?._id,
            firstname: userDoc?.firstname,
            lastname: userDoc?.lastname,
            email: userDoc?.email,
            mobile: userDoc?.mobile,
            token: generateUserToken(userDoc?._id)
        })
    } else {
        throw new Error('Invalid Credentials');
    }
})

//Handles refresh tokens
const handleRefreshToken =  asyncHandler(async (req, res) => {
    const cookie = req.cookies;
    if (!cookie?.refreshToken) throw new Error('No refresh Token in cookies');
    const refreshToken = cookie.refreshToken;
    const userWithToken = await User.findOne({ refreshToken });
    if (!userWithToken) throw new Error('No refresh token is present in the db or not matched');

    jwt.verify(refreshToken, process.env.JWT_SECRET, (err, decoded) => {
        if (err || userWithToken.id !== decoded.id){
            throw new Error('There is something wrong with refresh token');
        }
        const accessToken = generateUserToken(userWithToken?._id);
        res.json({ accessToken });
    })
})

//Logout a user

const logoutUser = asyncHandler(async (req, res) => {
    const cookie = req.cookies;
    if (!cookie?.refreshToken) throw new Error('No refresh Token in cookies');
    const refreshToken = cookie.refreshToken;
    const userWithToken = await User.findOne({ refreshToken });

    if (!userWithToken){
        res.clearCookie('refreshToken', {
            httpOnly: true,
            secure: true,
        });
        return res.sendStatus(204); //Forbidden
    }
    await User.findOneAndUpdate({refreshToken},{
        refreshToken: '',
    });
    res.clearCookie('refreshToken', {
        httpOnly: true,
        secure: true,
    });
    return res.sendStatus(204); //Forbidden
})

//Updates a user's data

const updateUser = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    validateMongodbId(_id);
    try {
        const updatedUser = await User.findByIdAndUpdate(_id, {
           firstname: req?.body?.firstname, 
           lastname: req?.body?.lastname, 
           email: req?.body?.email, 
           mobile: req?.body?.mobile,
        }, { new: true });
        res.json(updatedUser);
    } catch (e){
        throw new Error(e);
    }
})

//Fetches all users from db

const getAllUsers = asyncHandler(async (req, res) => {
    try {
        const allUsersDocs = await User.find();
        res.json(allUsersDocs);
    } catch(e) {
        throw new Error(e)
    }
})

//Fetches all users from db
const getUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongodbId(id);
    try {
        const userDoc = await User.findById(id);
        res.json({userDoc});
    } catch(e) {
        throw new Error(e)
    }
})


//Deletes a user form the db

const deleteUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongodbId(id);
    try {
        const deletedUser = await User.findByIdAndDelete(id);
        res.json({deletedUser});
    } catch(e) {
        throw new Error(e)
    }
})


//Blocks a user

const blockUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongodbId(id);
    try {
        const block = await User.findByIdAndUpdate(id,
            {
                isBlocked: true,
            }, {
                new: true,
        })
        res.json({
            message: 'User blocked'
        })
    } catch(e) {
        throw new Error(e)
    }
})

//Unblocks a user
const unblockUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongodbId(id);
    try {
        const unblock = await User.findByIdAndUpdate(id,
            {
                isBlocked: false,
            }, {
                new: true,
        })
        res.json({
            message: 'User unblocked'
        })
    } catch(e) {
        throw new Error(e)
    }
})

//Update password

const updatePassword = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const {password} = req.body;
    validateMongodbId(_id);
    const userDoc = await User.findById(_id);
    if (password){
        userDoc.password = password;
        const updatedPassword = await userDoc.save();
        res.json(updatedPassword);
    } else {
        res.json(userDoc);
    }
})

module.exports = {
    createUser,
    loginUser,
    getAllUsers,
    getUser,
    deleteUser,
    updateUser,
    blockUser,
    unblockUser,
    handleRefreshToken,
    logoutUser,
    updatePassword,
}