const mongoose = require ('mongoose');
const { time, timeStamp } = require('node:console');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
     
        },
        role: {
            type: String,
            enum: ["admin", "business"],
            default: "business"
        },
        address: {
            type: String,
            required: true
        },
        businessId: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Business"
        }]
        
    },
    {
    timestamps: true
    });
    module.exports = mongoose.model ("User", userSchema);