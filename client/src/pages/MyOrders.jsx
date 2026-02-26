import { useEffect, useState } from "react";
import axios from "axios";

const MyOrders = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/myorder", {
            withCredentials: true
        })
            .then(res => setOrders(res.data.orders))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-6">

            <h2 className="text-3xl font-bold mb-8 text-center">
                My Orders 📦
            </h2>

            {orders.length === 0 ? (
                <p className="text-center text-gray-500">
                    No Orders Found
                </p>
            ) : (
                <div className="max-w-4xl mx-auto space-y-6">
                    {orders.map(order => (
                        <div
                            key={order._id}
                            className="bg-white p-6 rounded-xl shadow-md"
                        >
                            <p className="font-bold">
                                Order ID: {order._id}
                            </p>

                            <p>Total: ₹{order.totalAmount}</p>
                            <p>Status: {order.status}</p>

                            <p className="text-sm text-gray-500">
                                Date: {new Date(order.createdAt).toLocaleString()}
                            </p>
                        </div>
                    ))}
                </div>
            )}

        </div>
    );
};

export default MyOrders;