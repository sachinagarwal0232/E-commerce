import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        title: "",
        price: "",
        description: "",
        category: "",
        stock: "",
        image: "",
    });

    const fetchedsingleproduct = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/api/products/${id}`);
            setForm(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchedsingleproduct()
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });

    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.put(`http://localhost:5000/api/product/${id}`, form, { withCredentials: true });
            alert("Product Updated Successfully");
            navigate("/ProductList");
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form onSubmit={handleSubmit} className='max-w-md mx-auto mt-10'>
            <h2 className="text-2xl font-bold mb-6 text-center">
                Edit Product
            </h2>

            <input
                name="title"
                value={form.title}
                onChange={handleChange}
                className="border p-2 w-full mb-3"
                placeholder="Title"
            />

            <input
                name="price"
                type="number"
                value={form.price}
                onChange={handleChange}
                className="border p-2 w-full mb-3"
                placeholder="Price"
            />

            <input
                name="description"
                value={form.description}
                onChange={handleChange}
                className="border p-2 w-full mb-3"
                placeholder="Description"
            />

            <input
                name="category"
                value={form.category}
                onChange={handleChange}
                className="border p-2 w-full mb-3"
                placeholder="Category"
            />

            <input
                name="stock"
                type="number"
                value={form.stock}
                onChange={handleChange}
                className="border p-2 w-full mb-3"
                placeholder="Stock"
            />
            <input
                type='file'
                name="image"
                onChange={handleChange}
                className="border p-2 w-full mb-3"
                placeholder="Image URL"
            />

            <button className="bg-green-600 text-white p-2 w-full">
                Update Product
            </button>
        </form>


    )
}

export default EditProduct