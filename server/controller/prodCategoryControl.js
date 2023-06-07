const ProdCategory = require('../models/prodCategoryModel');
const asyncHandler = require('express-async-handler');
const validateMongodbId = require('../utils/validateMongodbId');

const prodCreateCategory = asyncHandler(async (req, res) => {
    try {
        const prodCategoryDoc = await ProdCategory.create(req.body);
        res.json(prodCategoryDoc);
    } catch (e){
        throw new Error(e);
    }
})

const prodUpdateCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongodbId(id);
    try {
        const prodCategoryDoc = await ProdCategory.findByIdAndUpdate({ _id: id }, req.body, {
         new: true   
        });
        res.json(prodCategoryDoc);
    } catch (e){
        throw new Error(e);
    }
})

const prodRemoveCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongodbId(id);
    try {
        const prodCategoryDoc = await ProdCategory.findByIdAndDelete(id);
        res.json(prodCategoryDoc);
    } catch (e){
        throw new Error(e);
    }
})

const prodGetCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongodbId(id);
    try {
        const prodCategoryDoc = await ProdCategory.findById(id);
        res.json(prodCategoryDoc);
    } catch (e){
        throw new Error(e);
    }
})

const prodGetAllCategories = asyncHandler(async (req, res) => {
    try {
        const prodCategoriesDoc = await ProdCategory.find();
        res.json(prodCategoriesDoc);
    } catch (e){
        throw new Error(e);
    }
})

module.exports = {
    prodCreateCategory,
    prodUpdateCategory,
    prodRemoveCategory,
    prodGetCategory,
    prodGetAllCategories,
}
    
