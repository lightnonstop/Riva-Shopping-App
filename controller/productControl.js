const Product = require('../models/productModel');
const asyncHandler = require('express-async-handler');
const slugify = require('slugify');

const createProduct = asyncHandler(async (req, res) => {
    if(req.body.title){
        req.body.slug = slugify(req.body.title);
    }
    try {
        const productDoc = await Product.create(req.body);
        res.json(productDoc);
    } catch(e){
        throw new Error(e)
    }
});

const updateProduct = asyncHandler(async (req, res) => {
    const {id} = req.params;
    try {
        if (req.body.title){
            req.body.slug = slugify(req.body.title);
        }
        const productDoc = await Product.findOneAndUpdate({_id : id}, req.body, 
        { 
            new: true, 
        });
        res.json(productDoc);
    } catch(e){
        throw new Error(e)
    }
});

const getProduct = asyncHandler(async (req, res) => {
    const {id} = req.params;
    try {
        const productDoc = await Product.findById(id);
        res.json(productDoc);
    } catch(e){
        throw new Error(e)
    }
});

const getAllProducts = asyncHandler(async (req, res) => {
    try {
        const allProductsDoc = await Product.find();
        res.json(allProductsDoc);
    } catch(e){
        throw new Error(e)
    }
});




module.exports = {
    createProduct,
    getProduct,
    getAllProducts,
    updateProduct,
};