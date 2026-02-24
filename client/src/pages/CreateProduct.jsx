import { useState } from "react";
import axios from "axios";


const CreateProduct = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [stock, setStock] = useState("");
    const [image, setImage] = useState(null);



    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(image)

        try {
            const formData = new FormData(); // F capital
            formData.append("title", title);
            formData.append("price", price);
            formData.append("description", description);
            formData.append("category", category);
            formData.append("stock", stock);
            formData.append("image", image);

            await axios.post(
                "http://localhost:5000/api/product",
                formData,
                { withCredentials: true }
            );

            alert("Product Created Successfully");

        } catch (error) {
            console.log(error);
            alert(error || "Error");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-10">
            <h2 className="text-xl font-bold mb-4">Create Product</h2>

            <input
                placeholder="Enter Product Name"
                onChange={(e) => setTitle(e.target.value)}
                className="border p-2 w-full mb-3"
            />

            <input
                type="number"
                placeholder="Enter Product Price"
                onChange={(e) => setPrice(e.target.value)}
                className="border p-2 w-full mb-3"
            />

            <input
                placeholder="Enter Product Description"
                onChange={(e) => setDescription(e.target.value)}
                className="border p-2 w-full mb-3"
            />

            <input
                placeholder="Enter Product Category"
                onChange={(e) => setCategory(e.target.value)}
                className="border p-2 w-full mb-3"
            />

            <input
                type="number"
                placeholder="Enter Product Stock"
                onChange={(e) => setStock(e.target.value)}
            />

            <input
                type="file"

                onChange={(e) => setImage(e.target.files[0])}
                className="border p-2 w-full mb-3"
            />

            <button className="bg-indigo-600 text-white p-2 w-full">
                Create Product
            </button>
        </form>
    );
};

export default CreateProduct;
