const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    items: Array,
    totalAmount: Number,
    transactionId: String,

    status: { type: String, enum: ['pending', 'shipped', 'delivered', 'cancelled'], default: 'pending' },


}, { timestamps: true });
module.exports = mongoose.model("Order", orderSchema);