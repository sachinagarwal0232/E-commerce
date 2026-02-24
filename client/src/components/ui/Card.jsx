const Card = ({ children }) => {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
            {children}
        </div>
    );
};

export default Card;
