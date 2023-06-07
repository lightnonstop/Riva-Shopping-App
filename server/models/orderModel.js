const mongoose = require('mongoose');
var orderSchema = new mongoose.Schema({
    products:[{
        product:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
        },
        count:Number,
        color:String,
    }],
    paymentIntent:{},
    orderStatus:{
        type: String,
        default: 'Not processed',
        enum: [
        'Not processed', 
        'Cash on delivery', 
        'Processing',
        'Dispatched',
        'Cancelled',
        'Delivered'
    ]
    },
    orderBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
}, { timestamps: true, });

module.exports = mongoose.model('Order', orderSchema);