const express = require('express');
const { createOrder, myorder, getAllOrders, updateOrderStatus } = require('../controllers/orderController');
const authMiddleware = require('../middleware/authmiddleware');
const adminmiddleware = require('../middleware/admin');
const router = express.Router();

router.get('/admin/orders', authMiddleware, adminmiddleware, getAllOrders);
router.put('/admin/orderstatus/:id', authMiddleware, adminmiddleware, updateOrderStatus);
router.post('/order', authMiddleware, createOrder);
router.get('/myorder', authMiddleware, myorder);

module.exports = router;