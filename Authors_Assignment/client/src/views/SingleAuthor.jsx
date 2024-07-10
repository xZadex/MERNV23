import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {
    Link,
} from "react-router-dom";


const SingleAuthor = () => {
    const {id} = useParams();
    const [author, setAuthor] = useState({});
    const navigate = useNavigate();

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/api/author/${id}`)
            .then(res => {
                console.log(res);
                navigate("/authors");
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then( res => {
                setAuthor(res.data.author)
            })
            .catch( err => console.log('API Error:', err))
    }, [id])
    return (
        <div className='d-flex justify-content-center mt-5 gap-5'>
            <div>
                <p><strong>Name:</strong> {author.name}</p>
                <div className='action-container'>
                <Link to={`/authors/${author._id}/edit`} className='link'><i class="fa-solid fa-pen action-button"></i></Link>
                <i className="fa-solid fa-trash action-button" onClick={() => handleDelete(author._id)}></i>
                </div>
            </div>
        </div>
    )
}

export default SingleAuthor