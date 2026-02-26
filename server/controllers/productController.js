const product = require('../models/Product');
const cloudinary = require("../config/cloudinary");
const fs = require('fs');
const addproduct = async (req, res) => {
    try {

        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ msg: 'Please Upload a File' })
        }


        let imageurl = [];
        for (const file of req.files) {
            const result = await cloudinary.uploader.upload(file.path, {
                folder: 'ecommerce'

            })
            imageurl.push(result.secure_url);
            fs.unlinkSync(file.path);
        }

        const newProduct = product.create({ ...req.body, image: imageurl });
        return res.status(201).json({ msg: 'Product Created Successfully', newProduct })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: error.message })
    }
}


const getProducts = async (req, res) => {
    try {
        const products = await product.find({});

        return res.status(200).json({ msg: 'Products Fetched Successfully', products })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ msg: error.message })
    }
}




const detailProduct = async (req, res) => {
    try {
        const products = await product.findById(req.params.id)
        if (!products) {
            return res.status(400).json({ msg: 'Product Not found' })
        }
        res.json(products)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}


const updateproduct = async (req, res) => {

    try {
        console.log(req.body);
        const products = await product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!products) {
            return res.status(404).json({ msg: 'Product Not found' })
            // res.send('Product Not found');
        }
        res.json({ msg: 'Product Updated Successfully', products })
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

const deleteproduct = async (req, res) => {
    try {

        const products = await product.findByIdAndDelete(req.params.id);
        if (!products) {
            return res.status(404).json({ msg: 'Product Not found' })

        }
        res.json({ msg: 'Product Deleted Successfully', products })
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

module.exports = { addproduct, getProducts, detailProduct, updateproduct, deleteproduct };