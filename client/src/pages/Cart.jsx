import { useCart } from "../context/CartContext";

const Cart = () => {

    const {
        cart,
        increaseQty,
        decreaseQty,
        removeFromCart
    } = useCart();

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div className="min-h-screen bg-gray-100 p-8">

            <h2 className="text-3xl font-bold mb-8 text-center">
                Your Cart 🛒
            </h2>

            {cart.length === 0 ? (
                <p className="text-center text-gray-500">
                    Cart is Empty
                </p>
            ) : (
                <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md">

                    {cart.map(item => (
                        <div
                            key={item._id}
                            className="flex justify-between items-center border-b py-4"
                        >

                            <div>
                                <h3 className="font-semibold">{item.title}</h3>
                                <p className="text-indigo-600 font-bold">
                                    ₹{item.price}
                                </p>
                            </div>

                            <div className="flex items-center gap-3">

                                <button
                                    onClick={() => decreaseQty(item._id)}
                                    className="bg-gray-200 px-3 py-1 rounded"
                                >
                                    -
                                </button>

                                <span className="font-bold">
                                    {item.quantity}
                                </span>

                                <button
                                    onClick={() => increaseQty(item._id)}
                                    className="bg-gray-200 px-3 py-1 rounded"
                                >
                                    +
                                </button>

                                <button
                                    onClick={() => removeFromCart(item._id)}
                                    className="bg-red-500 text-white px-3 py-1 rounded"
                                >
                                    Remove
                                </button>

                            </div>

                        </div>
                    ))}

                    <div className="mt-6 text-right">
                        <h3 className="text-xl font-bold">
                            Total: ₹{total}
                        </h3>
                    </div>

                </div>
            )}

        </div>
    );
};

export default Cart;