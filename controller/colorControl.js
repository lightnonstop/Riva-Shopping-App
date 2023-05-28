const Color = require('../models/colorModel');
const asyncHandler = require('express-async-handler');
const validateMongodbId = require('../utils/validateMongodbId');

const createColor = asyncHandler(async (req, res) => {
    try {
        const ColorDoc = await Color.create(req.body);
        res.json(ColorDoc);
    } catch (e){
        throw new Error(e);
    }
})

const updateColor = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongodbId(id);
    try {
        const ColorDoc = await Color.findByIdAndUpdate({ _id: id }, req.body, {
         new: true   
        });
        res.json(ColorDoc);
    } catch (e){
        throw new Error(e);
    }
})

const removeColor = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongodbId(id);
    try {
        const ColorDoc = await Color.findByIdAndDelete(id);
        res.json(ColorDoc);
    } catch (e){
        throw new Error(e);
    }
})

const getColor = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongodbId(id);
    try {
        const ColorDoc = await Color.findById(id);
        res.json(ColorDoc);
    } catch (e){
        throw new Error(e);
    }
})

const getAllColors = asyncHandler(async (req, res) => {
    try {
        const ColorsDoc = await Color.find();
        res.json(ColorsDoc);
    } catch (e){
        throw new Error(e);
    }
})

module.exports = {
    createColor,
    updateColor,
    removeColor,
    getColor,
    getAllColors,
}