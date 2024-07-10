import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
    Link,
} from "react-router-dom";


const AllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/product")
            .then( res => {
                console.log(res.data.products)
                setProducts(res.data.products)
            })
            .catch( err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                console.log(res);
                setProducts(products.filter( item => item._id !== id));

            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h2 className='text-center  m-5'>All Products</h2>
            <table className='table table-light table-striped table-hover table-bordered'>
                <thead>
                    <tr>
                        <th className='text-center'>Title</th>
                        <th className='text-center'>Price</th>
                        <th className='text-center'>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map( (item, i) => 
                            <tr key={i}>
                                <td scope="row"><Link to={`/products/${item._id}`} className='link'>{item.title}</Link></td>
                                <td>{item.price}</td>
                                <td>{item.description}</td>
                            </tr>                       
                    )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AllProducts