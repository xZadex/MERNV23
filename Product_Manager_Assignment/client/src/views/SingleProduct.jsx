import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {
    Link,
} from "react-router-dom";
import DeleteButton from '../components/DeleteButton';


const SingleProduct = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const navigate = useNavigate();

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                console.log(res);
                navigate("/products");
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then( res => {
                setProduct(res.data.product)
            })
            .catch( err => console.log('API Error:', err))
    }, [id])
    return (
        <div className='d-flex justify-content-center mt-5 gap-5'>
            <img className='product-image' src="https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg" alt="placeholder" />
            <div>
                <p><strong>Title:</strong> {product.title}</p>
                <p><strong>Price:</strong> {product.price}</p>
                <p><strong>Description:</strong> {product.description}</p>
                <div className='action-container'>
                <Link to={`/products/${product._id}/edit`} className='link'><i class="fa-solid fa-pen action-button"></i></Link>
                <DeleteButton successCallback={()=>handleDelete(product._id)}/>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct