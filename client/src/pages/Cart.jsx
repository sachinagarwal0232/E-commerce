import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cart = () => {

    const navigate = useNavigate();

    const { cart, removeFromCart } = useCart();

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    const checkout = () => {
        alert(`Total Amount: ₹${total}`);
        navigate("/payment");
    };

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-6">

            <h2 className="text-3xl font-bold mb-8 text-center">
                Your Cart 🛒
            </h2>

            {cart.length === 0 ? (
                <div className="text-center text-gray-500 text-lg">
                    Your cart is empty
                </div>
            ) : (
                <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6">

                    {cart.map((item) => (
                        <div
                            key={item._id}
                            className="flex items-center justify-between border-b py-4"
                        >

                            <div className="flex items-center gap-4">
                                <img
                                    src={Array.isArray(item.image) ? item.image[0] : item.image}
                                    alt={item.title}
                                    className="w-20 h-20 object-cover rounded-lg"
                                />

                                <div>
                                    <h3 className="font-semibold text-lg">{item.title}</h3>
                                    <p className="text-indigo-600 font-bold">
                                        ₹{item.price}
                                    </p>
                                </div>
                            </div>

                            <button
                                onClick={() => removeFromCart(item._id)}
                                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
                            >
                                Remove
                            </button>

                        </div>
                    ))}

                    {/* Total Section */}
                    <div className="mt-6 flex justify-between items-center border-t pt-4">
                        <h3 className="text-xl font-bold">
                            Total: ₹{total}
                        </h3>

                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition" onClick={checkout}>

                            Checkout
                        </button>
                    </div>

                </div>
            )}

        </div>
    );
};

export default Cart;