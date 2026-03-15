const mongoose = require ('mongoose');
const { time, timeStamp } = require('node:console');

const businessSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        industry: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        phone: {
            type: String,
            required: true,
            unique: true
        },
        address: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        onboardingStatus: {
            type: String,
            enum: ["pending", "in-progress", "completed"],
            default:"pending"
        },
        productions: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        }]
        
    },
    {
    timestamps: true
    });
    module.exports = mongoose.model("Business", businessSchema);