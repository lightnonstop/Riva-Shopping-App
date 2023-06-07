const mongoose = require('mongoose');
var EnquirySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    mobile:{
        type:String,
        required:true,
    },
    comment:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        default: 'Submitted',
        enum: [
            "Submitted",
            "Contacted",
            "In progress",
        ]
    },
});

module.exports = mongoose.model('Enquiry', EnquirySchema);