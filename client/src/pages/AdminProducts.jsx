import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AdminProducts = () => {

    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    const fetchProducts = async () => {
        try {
            const response = await axios.get(
                'http://localhost:5000/api/products',
                { withCredentials: true }
            );
            setProducts(response.data.products);
        } catch (error) {
            console.log(error);
        }
    };

    const editProduct = (id) => {
        navigate(`/admin/editproduct/${id}`);
    };

    const deleteProduct = async (id) => {
        try {
            await axios.delete(
                `http://localhost:5000/api/product/${id}`,
                { withCredentials: true }
            );
            alert('Product deleted successfully');
            fetchProducts();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="p-6">

            <h2 className="text-2xl font-bold mb-6">
                Admin Product List
            </h2>

            <div className="overflow-x-auto bg-white shadow rounded-lg">

                <table className="min-w-full text-sm text-left">

                    <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
                        <tr>
                            <th className="px-4 py-3">Image</th>
                            <th className="px-4 py-3">Title</th>
                            <th className="px-4 py-3">Price</th>
                            <th className="px-4 py-3">Category</th>
                            <th className="px-4 py-3">Stock</th>
                            <th className="px-4 py-3 text-center">Action</th>
                        </tr>
                    </thead>

                    <tbody>

                        {products.map((p) => (
                            <tr
                                key={p._id}
                                className="border-b hover:bg-gray-50"
                            >

                                <td className="px-4 py-3">
                                    <img
                                        src={Array.isArray(p.image) ? p.image[0] : p.image}
                                        className="h-12 w-12 object-cover rounded"
                                    />
                                </td>

                                <td className="px-4 py-3 font-medium">
                                    {p.title}
                                </td>

                                <td className="px-4 py-3">
                                    ₹{p.price}
                                </td>

                                <td className="px-4 py-3">
                                    {p.category}
                                </td>

                                <td className="px-4 py-3">
                                    {p.stock}
                                </td>

                                <td className="px-4 py-3 text-center space-x-2">

                                    <button
                                        onClick={() => editProduct(p._id)}
                                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs"
                                    >
                                        Edit
                                    </button>

                                    <button
                                        onClick={() => deleteProduct(p._id)}
                                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs"
                                    >
                                        Delete
                                    </button>

                                </td>

                            </tr>
                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    );
};

export default AdminProducts;