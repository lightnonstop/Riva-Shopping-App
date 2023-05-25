const Category = require('../models/categoryModel');
const asyncHandler = require('express-async-handler');
const validateMongodbId = require('../utils/validateMongodbId');

const createCategory = asyncHandler(async (req, res) => {
    try {
        const categoryDoc = await Category.create(req.body);
        res.json(categoryDoc);
    } catch (e){
        throw new Error(e);
    }
})

module.exports = createCategory;