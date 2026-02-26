import { useEffect, useState } from "react";
import axios from "axios";

const AdminOrders = () => {

    const [orders, setOrders] = useState([]);

    const fetchOrders = () => {
        axios.get("http://localhost:5000/api/admin/orders", {
            withCredentials: true
        })
            .then(res => setOrders(res.data.orders))
            .catch(err => console.log(err));
    };

    useEffect(() => {
        fetchOrders();
        const interval = setInterval(fetchOrders, 5000);

        return () => clearInterval(interval);
    }, []);

    const updateStatus = (id, status) => {

        axios.put(
            `http://localhost:5000/api/admin/orderstatus/${id}`,
            { status },
            { withCredentials: true }
        )
            .then(() => fetchOrders())
            .catch(err => console.log(err));
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">

            <h2 className="text-3xl font-bold mb-8 text-center">
                Admin Orders Panel 📦
            </h2>

            <div className="bg-white rounded-xl shadow-md p-6 overflow-x-auto">

                <table className="w-full text-left">

                    <thead>
                        <tr className="border-b">
                            <th>User</th>
                            <th>Total</th>
                            <th>Transaction</th>
                            <th>Status</th>
                            <th>Update</th>
                        </tr>
                    </thead>

                    <tbody>
                        {orders.map(order => (
                            <tr key={order._id} className="border-b">

                                <td>
                                    {order.user?.name}
                                    <br />
                                    <span className="text-xs text-gray-500">
                                        {order.user?.email}
                                    </span>
                                </td>

                                <td>₹{order.totalAmount}</td>

                                <td>{order.transactionId || "N/A"}</td>

                                <td>
                                    <span className={
                                        order.status === "Delivered"
                                            ? "text-green-600"
                                            : order.status === "Shipped"
                                                ? "text-blue-600"
                                                : "text-yellow-600"
                                    }>
                                        {order.status}
                                    </span>
                                </td>

                                <td>
                                    <select
                                        value={order.status}
                                        onChange={(e) =>
                                            updateStatus(order._id, e.target.value)
                                        }
                                        className="border p-1 rounded"
                                    >
                                        <option>Pending</option>
                                        <option>Shipped</option>
                                        <option>Delivered</option>
                                    </select>
                                </td>

                            </tr>
                        ))}
                    </tbody>

                </table>

            </div>

        </div>
    );
};

export default AdminOrders;