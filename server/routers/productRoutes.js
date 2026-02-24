const express = require("express");
const { addproduct, getProducts, detailProduct, updateproduct, deleteproduct } = require("../controllers/productController");
const adminmiddleware = require("../middleware/admin");
const upload = require("../middleware/upload");
const authMiddleware = require("../middleware/authmiddleware");
const router = express.Router();

router.post('/product', authMiddleware, adminmiddleware, upload.array('image', 5), addproduct);
router.get('/products', getProducts);
router.get('/products/:id', detailProduct);
router.put('/product/:id', authMiddleware, adminmiddleware, updateproduct);
router.delete('/product/:id', authMiddleware, adminmiddleware, deleteproduct);

module.exports = router;