import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import ProductForm from '../components/ProductForm';


const EditProduct = () => {
    const {id} = useParams();
    const [updatedTitle, setUpdatedTitle] = useState("");
    const [updatedPrice, setUpdatedPrice] = useState("");
    const [updatedDescription, setUpdatedDescription] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then( res => {
                setUpdatedTitle(res.data.product.title);
                setUpdatedPrice(res.data.product.price);
                setUpdatedDescription(res.data.product.description);
            })
            .catch( err => console.log('API Error:', err))
    }, [id])

    const handleUpdate = (e) => {
        e.preventDefault();

        axios.patch(`http://localhost:8000/api/product/${id}`, {
            title: updatedTitle,
            price: updatedPrice,
            description: updatedDescription
        })
            .then(res => {
                console.log(res.data.product);
                navigate(`/products/${id}`);
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='d-flex justify-content-center mt-5 gap-5'>
            <img className='product-image' src="https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg" alt="placeholder" />
            <div>
            <ProductForm handleUpdate={handleUpdate} setUpdatedTitle={setUpdatedTitle} setUpdatedPrice={setUpdatedPrice} setUpdatedDescription={setUpdatedDescription} updatedTitle={updatedTitle} updatedPrice={updatedPrice} updatedDescription={updatedDescription}/>
            </div>
        </div>
    )
}

export default EditProduct