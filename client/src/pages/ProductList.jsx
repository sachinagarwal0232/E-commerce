import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const { addToCart } = useCart();
    const navigate = useNavigate();

    const addCart = (product) => {
        addToCart(product);
        navigate("/cart");
    };

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/products")
            .then((res) => {
                setProducts(res.data.products);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-6">

            <h2 className="text-3xl font-bold text-center mb-10">
                Our Products 🛍️
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

                {products.map((p) => (
                    <div
                        key={p._id}
                        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
                    >

                        <Link to={`/product/${p._id}`}>
                            <div className="h-52 overflow-hidden">
                                <img
                                    src={Array.isArray(p.image) ? p.image[0] : p.image}
                                    alt={p.title}
                                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                                />
                            </div>

                            <div className="p-4">
                                <h3 className="font-semibold text-lg mb-1 truncate">
                                    {p.title}
                                </h3>

                                <p className="text-indigo-600 font-bold text-lg">
                                    ₹{p.price}
                                </p>
                            </div>
                        </Link>

                        <div className="px-4 pb-4">
                            <button
                                onClick={() => addCart(p)}
                                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition duration-200"
                            >
                                Add to Cart
                            </button>
                        </div>

                    </div>
                ))}

            </div>
        </div>
    );
};

export default ProductList;