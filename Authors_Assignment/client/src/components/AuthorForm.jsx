import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const AuthorForm = () => {
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/author", {
            name: name,
        })
            .then(res => {
                console.log(res.data.author);
                navigate("/authors");
            })
            .catch(err => {
                setNameError(err.response.data.errors.name.message);
            });
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div className='form-container'>
                {nameError ? <p className='errors'>{nameError}</p> : <></>}
                <div className='d-flex align-items-center gap-2'>
                <label >Name: </label>
                <input type="text" placeholder='Name' required onChange={(e) => setName(e.target.value)} value={name} />
                </div>
            </div>
            <button type='submit' className='btn btn-warning create-button'>Create Author</button>
        </form>
        </>
    )
}

export default AuthorForm