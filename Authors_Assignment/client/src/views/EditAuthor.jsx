import React, {useState, useEffect} from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {
    Link,
} from "react-router-dom";


const EditAuthor = () => {
    const {id} = useParams();
    const [updatedName, setUpdatedName] = useState("");
    const [nameError, setNameError] = useState("");
    const [idError, setIDError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then( res => {
                setUpdatedName(res.data.author.name);
            })
            .catch( err => setIDError("We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database?"))
    }, [id])

    const handleUpdate = (e) => {
        e.preventDefault();

        axios.patch(`http://localhost:8000/api/author/${id}`, {
            name: updatedName,
        })
            .then(res => {
                console.log(res.data.name);
                navigate(`/authors/${id}`);
            })
            .catch(err => setNameError(err.response.data.errors.name.message));
    }

    return (
        <div className='d-flex justify-content-center mt-5 gap-5'>
            <div>
                {
                    idError ?
                    <div className='text-center'>                        
                        <p>{idError}</p>
                        <Link to={"/authors/new"}>Create Author</Link>
                    </div>
                    :
                    <form onSubmit={handleUpdate}>
                        {nameError ? <p className='errors'>{nameError}</p> : <></>}
                        <p><strong>Name: </strong><input type="text" value={updatedName} onChange={(e) => setUpdatedName(e.target.value)}/></p>
                        <button type='submit' className='btn btn-warning'>Edit</button>
                    </form>
                }
            </div>
        </div>
    )
}

export default EditAuthor