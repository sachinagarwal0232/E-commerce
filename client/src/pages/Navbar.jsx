import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));

    const logout = () => {
        localStorage.removeItem("user");
        navigate("/login");
    };

    // const scrollToSection = (id) => {
    //     const section = document.getElementById(id);
    //     if (section) {
    //         section.scrollIntoView({ behavior: "smooth" });
    //     }
    // };
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <h1
                    onClick={() => navigate("home")}
                    className="text-2xl font-bold text-indigo-600 cursor-pointer"
                >
                    MERN Shop
                </h1>

                {/* Center Menu */}
                <nav className="hidden md:flex space-x-8 font-medium text-gray-700">
                    <Link to="/" className="hover:text-indigo-600">
                        Home
                    </Link>
                    <Link to="/about" className="hover:text-indigo-600">
                        About
                    </Link>
                    <Link to="/contact" className="hover:text-indigo-600">
                        Contact
                    </Link>
                </nav>

                {/* Right Side */}
                <div className="flex items-center space-x-5">

                    {user?.role === "admin" && (
                        <>
                            <Link to="/admin/products" className="hover:text-indigo-600">
                                Manage
                            </Link>
                            <Link to="/AddProduct" className="hover:text-indigo-600">
                                Add Product
                            </Link>
                        </>
                    )}

                    {user?.role === "user" && (
                        <>
                            <Link to="/ProductList" className="hover:text-indigo-600">
                                Products
                            </Link>
                            <Link to="/cart" className="hover:text-indigo-600">
                                Cart
                            </Link>
                        </>
                    )}

                    {!user ? (
                        <button
                            onClick={() => navigate("/login")}
                            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
                        >
                            Login
                        </button>
                    ) : (
                        <button
                            onClick={logout}
                            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                        >
                            Logout
                        </button>
                    )}
                </div>

            </div>
        </header>
    );
};

export default Navbar;