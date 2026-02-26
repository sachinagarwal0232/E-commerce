const Order = require("../models/Order");

const createOrder = async (req, res) => {
    try {
        const newOrder = await Order.create({ ...req.body, user: req.user._id, status: 'pending' });
        res.status(201).json({ msg: 'Order Created Successfully', newOrder })
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}


const myorder = async (req, res) => {

    try {
        const orders = await Order.find({ user: req.user._id }).sort({ createdAt: -1 });

        res.status(200).json({ msg: 'Orders Fetched Successfully', orders })
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find({}).populate('user', 'name email ');
        res.status(200).json({ orders })
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

const updateOrderStatus = async (req, res) => {
    try {

        const { status } = req.body;

        const order = await Order.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        );

        if (!order) {
            return res.status(404).json({ msg: "Order not found" });
        }

        res.json({ msg: "Status Updated", order });

    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};


module.exports = { createOrder, myorder, getAllOrders, updateOrderStatus } 