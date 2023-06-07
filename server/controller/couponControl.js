const Coupon = require('../models/couponModel');
const validateMongoDbId = require('../utils/validateMongodbId');
const asyncHandler = require("express-async-handler");

const createCoupon = asyncHandler(async (req, res) => {
    try {
        const couponDoc = await Coupon.create(req.body);
        res.json(couponDoc);
    } catch (e){
        throw new Error(e);
    }
})

const getAllCoupons = asyncHandler(async (req, res) => {
    try {
        const couponsDoc = await Coupon.find();
        res.json(couponsDoc);
    } catch (e){
        throw new Error(e);
    }
})

const updateCoupon = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const couponDoc = await Coupon.findByIdAndUpdate({_id:id}, req.body, {
            new: true,
        });
        res.json(couponDoc);
    } catch (e){
        throw new Error(e);
    }
})


const removeCoupon = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const couponDoc = await Coupon.findByIdAndDelete(id);
        res.json(couponDoc);
    } catch (e){
        throw new Error(e);
    }
})
module.exports = {
    createCoupon,
    getAllCoupons,
    updateCoupon,
    removeCoupon
};