const Input = ({ type, name, placeholder, onChange }) => {
    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            className="w-full mb-4 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
    );
};

export default Input;
