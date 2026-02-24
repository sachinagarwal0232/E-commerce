const Button = ({ children, onClick, type = "button" }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className="w-full bg-indigo-600 text-white p-3 rounded-xl hover:bg-indigo-700 transition font-semibold"
        >
            {children}
        </button>
    );
};

export default Button;
