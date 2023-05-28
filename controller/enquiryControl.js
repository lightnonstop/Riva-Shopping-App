const Enquiry = require('../models/enquiryModel');
const asyncHandler = require('express-async-handler');
const validateMongodbId = require('../utils/validateMongodbId');

const createEnquiry = asyncHandler(async (req, res) => {
    try {
        const EnquiryDoc = await Enquiry.create(req.body);
        res.json(EnquiryDoc);
    } catch (e){
        throw new Error(e);
    }
})

const updateEnquiry = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongodbId(id);
    try {
        const EnquiryDoc = await Enquiry.findByIdAndUpdate({ _id: id }, req.body, {
         new: true   
        });
        res.json(EnquiryDoc);
    } catch (e){
        throw new Error(e);
    }
})

const removeEnquiry = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongodbId(id);
    try {
        const EnquiryDoc = await Enquiry.findByIdAndDelete(id);
        res.json(EnquiryDoc);
    } catch (e){
        throw new Error(e);
    }
})

const getEnquiry = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongodbId(id);
    try {
        const EnquiryDoc = await Enquiry.findById(id);
        res.json(EnquiryDoc);
    } catch (e){
        throw new Error(e);
    }
})

const getAllEnquiries = asyncHandler(async (req, res) => {
    try {
        const EnquirysDoc = await Enquiry.find();
        res.json(EnquirysDoc);
    } catch (e){
        throw new Error(e);
    }
})

module.exports = {
    createEnquiry,
    updateEnquiry,
    removeEnquiry,
    getEnquiry,
    getAllEnquiries,
}