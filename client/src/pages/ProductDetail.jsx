import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'




const ProductDetail = () => {

    const { id } = useParams();
    const [product, setProducts] = useState(null);
    useEffect(() => {
        axios.get(`http://localhost:5000/api/products/${id}`)
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err);

            })
    }, [id])

    if (!product) {
        return <div>Loading...</div>
    }
    return (
        <div className="max-w-4xl mx-auto mt-10">
            <img
                src={`${product.image}`}
                className="w-96 mb-4"
            />
            <h2 className="text-2xl font-bold">{product.title}</h2>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-xl mt-2">₹{product.price}</p>
            <p className="text-sm text-gray-500">Stock: {product.stock}</p>
        </div>
    )
}

export default ProductDetail