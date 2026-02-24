import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addToCart = (product) => {

        const exist = cart.find(item => item._id === product._id);

        if (exist) {
            alert("Product already in cart");
            return;
        }

        setCart([...cart, product]);
    };

    const removeFromCart = (id) => {
        setCart(cart.filter(item => item._id !== id));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>

    );

};

export const useCart = () => useContext(CartContext);