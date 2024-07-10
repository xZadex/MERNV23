import React, { useState } from 'react'
import ProductForm from '../components/ProductForm';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Main = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/product", {
            title: title,
            price: price,
            description: description
        })
            .then(res => {
                console.log(res.data.product);
                navigate("/products");
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='product-form-container'>
            <ProductForm handleSubmit={handleSubmit} setTitle={setTitle} setPrice={setPrice} setDescription={setDescription} title={title} price={price} description={description}/>
        </div>
    )
}

export default Main