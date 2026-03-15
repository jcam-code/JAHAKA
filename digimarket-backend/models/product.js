const mongoose = require ('mongoose');

const productSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number, 
            required: true,
            default : 0 
        },
        category: {
            type: String, 
            required: true
        },
        inventory: {
            type: Number,
            default: 0
        },
        businessID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Business",
            required: true
        }
    },
    {
        timestamps : true
    });
    module.exports = mongoose.model ("Product", productSchema);