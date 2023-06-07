const { generateUserToken } = require('../config/jwtToken');
const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const { generateUserRefreshToken } = require('../config/refreshToken');
const sendEmail = require('./emailControl');
const crypto = require('crypto');
const validateMongodbId = require('../utils/validateMongodbId');
const { get } = require('http');
const Cart = require('../models/cartModel');
const Product = require('../models/productModel');
const Coupon = require('../models/couponModel');
const Order = require('../models/orderModel');
const uniqid = require('uniqid');

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

//Login admin

const loginAdmin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    //Checks if user claimed email address exists
    const adminDoc = await User.findOne({ email });
    if (adminDoc.role !== 'admin') throw new Error('Not authorised');
    const adminPasswordMatched = await adminDoc.isPasswordMatched(password);
    if (adminDoc && adminPasswordMatched){
        const refreshToken = await generateUserRefreshToken(adminDoc?._id);
        const updatedUser = await User.findByIdAndUpdate(
            adminDoc.id,
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
            _id: adminDoc?._id,
            firstname: adminDoc?.firstname,
            lastname: adminDoc?.lastname,
            email: adminDoc?.email,
            mobile: adminDoc?.mobile,
            token: generateUserToken(adminDoc?._id)
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

//Save user address 

const saveAddress = asyncHandler(async (req, res, next) => {
    const { _id } = req.user;
    validateMongodbId(_id);
    try {
        const updatedUser = await User.findByIdAndUpdate(_id, {
           address: req?.body?.address
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

const forgotPasswordToken = asyncHandler(async (req, res) => {
    const { email } = req.body;
    const userDoc = await User.findOne({ email });
    if (!userDoc) throw new Error('User not found with this eamil');
    try {
        const token = await userDoc.createPasswordResetToken();
        await userDoc.save();
        const resetMessageAndURL = `Hi, please follow this link to reset your passoword. Validation is 10 minutes from now. <a href='http://localhost:4000/api/user/reset-password/${token}'>Click here</a>`;
        const data = {
            to: email,
            text: "Hey user",
            subject: 'Forgot Password',
            htm: resetMessageAndURL,
        };
        sendEmail(data);
        res.json(token);
    } catch (e) {
       throw new Error(e); 
    }
    
})


const resetPassword = asyncHandler(async (req, res) => {
    const { password } = req.body;
    const { token } = req.params;
    const hashedToken = crypto.createHash("sha256").update(token).digest('hex');
    const userDoc = await User.findOne({ 
        passwordResetToken: hashedToken,
        passwordResetExpires: { $gt: Date.now() },
    });
    if (!userDoc) throw new Error('Token expired, Please try again later');
    userDoc.password = password;
    userDoc.passwordResetToken = undefined;
    userDoc.passwordResetExpires =  undefined;
    await userDoc.save;
    res.json(userDoc);
})

const getWishlist = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    try {
        const userDoc = await User.findById(_id).populate('wishlist');
        res.json(userDoc);
    } catch (e){
        throw new Error(e);
    }
})

const userCart = asyncHandler(async (req, res) => {
    const { cart } = req.body;
    const { _id } = req.user;
    validateMongodbId(_id);
    try {
        let products = [];
        const userDoc = await User.findById(_id);
        //check if user already has product in cart
        const alreadyExistCart = await Cart.findOne({ order: userDoc._id });

        if (alreadyExistCart){
            alreadyExistCart.remove();
        }

        for (let i = 0; i < cart.length; i++){
            let obj = {};
            obj.product = cart[i]._id;
            obj.count = cart[i].count;
            obj.color = cart[i].color;
            let getPrice = await Product.findById(cart[i]._id).select('price').exec();
            obj.price = getPrice.price;
            products.push(obj);
        }
        let cartTotal = products.map(product => product.price).reduce((prev, curr) => prev + curr, 0);
        
        let newCart = await Cart.create({
            products,
            cartTotal,
            orderBy: userDoc?._id,
        });
        res.json(newCart);
    } catch (e){
        throw new Error(e);
    }
})

const getUserCart = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    validateMongodbId(_id);
    try {
        const cartDoc = await Cart.findOne({ orderBy: _id }).populate('products.product');
        res.json(cartDoc);
    } catch (e){
        throw new Error(e)
    }
})

const removeCart = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    validateMongodbId(_id);
    try {
        const userDoc = await User.findOne({ _id });
        const cart = await Cart.findOneAndRemove({ orderBy: userDoc._id })
        res.json(cart);
    } catch (e){
        throw new Error(e)
    }
})

const applyCoupon = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    const { coupon } = req.body;
    const validCoupon = await Coupon.findOne({ name: coupon });
    try {
        if (validCoupon === null){
            throw new Error("Coupon is invalid");
        }
        const userDoc = await User.findOne({ _id });
        let { products, cartTotal } = await Cart.findOne({ orderBy: userDoc._id }).populate('products.product');
        let discountedTotal = (cartTotal - (cartTotal * validCoupon.discount) / 100).toFixed(2);
        await Cart.findOneAndUpdate(
            { orderBy: userDoc._id },
            { discountedTotal },
            { new: true },
        );
        res.json(discountedTotal);
    } catch (e){
        throw new Error(e)
    }
})

const createOrder = asyncHandler(async (req, res) => {
    const { COD, appliedCoupon } = req.body;
    const { _id } = req.user;
    validateMongodbId(_id);
    try {
        if (!COD) throw new Error('Create cash order failed');
        const userDoc = await User.findById(_id);
        const userCart = await Cart.findOne({ orderBy: userDoc._id });
        let finalAmount = 0;
        if (appliedCoupon && userCart.totalAfterDiscount){
            finalAmount = userCart.totalAfterDiscount;
        } else {
            finalAmount = userCart.cartTotal;
        }

        let newOrder = await new Order({
            products: userCart.products,
            paymentIntent: {
                id: uniqid(),
                method: 'COD',
                amount: finalAmount,
                status: 'Cash on delivery',
                created: Date.now(),
                currency: 'usd',
            },
            orderBy: userDoc._id,
            orderStatus: 'Cash on delivery'
        }).save();
        let update = userCart.products.map(item => {
            return {
                updateOne: {
                    filter: { _id: item.product._id },
                    update: { $inc: { quantity: -item.count, sold: +item.count} },
                },
            };
        });
        const updated = await Product.bulkWrite(update, {});
        res.json({ message: 'Your order is successful. Wait patiently for your delivery.' })
        console.log(updated);
    } catch (e){
        throw new Error(e)
    }
})

const getOrders = asyncHandler(async (req, res) => {
    const { _id } = req.user;
    validateMongodbId(_id);
    try {
        const userOrder = await Order.findOne({ orderBy: _id }).populate('products.product');
        res.json(userOrder);
    } catch (e){
        throw new Error(e);
    }
})

const updateOrderStatus = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    validateMongodbId(id);
    try {
        const updateOrder = await Order.findByIdAndUpdate(
            id, 
            {
                orderStatus: status,
                paymentIntent: {
                    status: status,
                },
            },
            { new: true },
            );
            res.json(updateOrder);
    } catch (e){
        throw new Error(e);
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
    forgotPasswordToken,
    resetPassword,
    loginAdmin,
    getWishlist,
    saveAddress,
    userCart,
    getUserCart,
    removeCart,
    applyCoupon,
    createOrder,
    getOrders,
    updateOrderStatus,
}