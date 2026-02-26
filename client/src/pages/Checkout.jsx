import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Checkout = () => {

    const { cart } = useCart();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [paymentStatus, setPaymentStatus] = useState(null);

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    const adminUpi = "admin@ybl";
    const upiString = `upi://pay?pa=${adminUpi}&pn=MERN Shop&am=${total}&cu=INR`;

    const handleFakePayment = async () => {

        setLoading(true);


        setTimeout(async () => {

            const isSuccess = Math.random() > 0.3; // 70% success chance

            if (isSuccess) {

                const transactionId = "TXN" + Date.now();

                const orderData = {
                    items: cart.map(item => ({
                        productId: item._id,
                        title: item.title,
                        price: item.price,
                        image: Array.isArray(item.image) ? item.image[0] : item.image,
                        quantity: 1
                    })),
                    totalAmount: total,
                    transactionId
                };

                await axios.post(
                    "http://localhost:5000/api/order",
                    orderData,
                    { withCredentials: true }
                );


                setPaymentStatus("success");

                setTimeout(() => {
                    navigate("/myorder");
                }, 1500);

            } else {
                setPaymentStatus("failed");
            }

            setLoading(false);

        }, 2000);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <div className="bg-white p-8 rounded-xl shadow-lg text-center w-96">

                <h2 className="text-2xl font-bold mb-4">
                    Scan & Pay ₹{total}
                </h2>

                <QRCodeCanvas value={upiString} size={220} />

                {paymentStatus === "success" && (
                    <p className="text-green-600 mt-4 font-semibold">
                        Payment Successful 🎉
                    </p>
                )}

                {paymentStatus === "failed" && (
                    <p className="text-red-600 mt-4 font-semibold">
                        Payment Failed ❌ Try Again
                    </p>
                )}

                <button
                    onClick={handleFakePayment}
                    disabled={loading}
                    className="mt-6 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
                >
                    {loading ? "Processing..." : "I Have Paid"}
                </button>

            </div>
        </div>
    );
};

export default Checkout;