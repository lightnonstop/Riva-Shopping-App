const BlogCategory = require('../models/blogCategoryModel');
const asyncHandler = require('express-async-handler');
const validateMongodbId = require('../utils/validateMongodbId');

const blogCreateCategory = asyncHandler(async (req, res) => {
    try {
        const blogCategoryDoc = await BlogCategory.create(req.body);
        res.json(blogCategoryDoc);
    } catch (e){
        throw new Error(e);
    }
})

const blogUpdateCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongodbId(id);
    try {
        const blogCategoryDoc = await BlogCategory.findByIdAndUpdate({ _id: id }, req.body, {
         new: true   
        });
        res.json(blogCategoryDoc);
    } catch (e){
        throw new Error(e);
    }
})

const blogRemoveCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongodbId(id);
    try {
        const blogCategoryDoc = await BlogCategory.findByIdAndDelete(id);
        res.json(blogCategoryDoc);
    } catch (e){
        throw new Error(e);
    }
})

const blogGetCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongodbId(id);
    try {
        const blogCategoryDoc = await BlogCategory.findById(id);
        res.json(blogCategoryDoc);
    } catch (e){
        throw new Error(e);
    }
})

const blogGetAllCategories = asyncHandler(async (req, res) => {
    try {
        const blogCategoriesDoc = await BlogCategory.find();
        res.json(blogCategoriesDoc);
    } catch (e){
        throw new Error(e);
    }
})

module.exports = {
    blogCreateCategory,
    blogUpdateCategory,
    blogRemoveCategory,
    blogGetCategory,
    blogGetAllCategories,
}
    
