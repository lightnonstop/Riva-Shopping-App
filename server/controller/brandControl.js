const Brand = require('../models/brandModel');
const asyncHandler = require('express-async-handler');
const validateMongodbId = require('../utils/validateMongodbId');

const createBrand = asyncHandler(async (req, res) => {
    try {
        const BrandDoc = await Brand.create(req.body);
        res.json(BrandDoc);
    } catch (e){
        throw new Error(e);
    }
})

const updateBrand = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongodbId(id);
    try {
        const BrandDoc = await Brand.findByIdAndUpdate({ _id: id }, req.body, {
         new: true   
        });
        res.json(BrandDoc);
    } catch (e){
        throw new Error(e);
    }
})

const removeBrand = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongodbId(id);
    try {
        const BrandDoc = await Brand.findByIdAndDelete(id);
        res.json(BrandDoc);
    } catch (e){
        throw new Error(e);
    }
})

const getBrand = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongodbId(id);
    try {
        const BrandDoc = await Brand.findById(id);
        res.json(BrandDoc);
    } catch (e){
        throw new Error(e);
    }
})

const getAllBrands = asyncHandler(async (req, res) => {
    try {
        const BrandsDoc = await Brand.find();
        res.json(BrandsDoc);
    } catch (e){
        throw new Error(e);
    }
})

module.exports = {
    createBrand,
    updateBrand,
    removeBrand,
    getBrand,
    getAllBrands,
}