import React from 'react'
import { useState } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios'
import PirateForm from '../components/PirateForm';
import { useNavigate } from "react-router-dom";

const AddPirate = (props) => {
    const {pirates, setPirates} = props;
    const navigate = useNavigate();
    const [pirate, setPirate] = useState({
        Name:"",
        Image:"",
        Chests:0,
        CatchPhrase:"",
        CrewPosition:"",
        PegLeg:true,
        EyePatch:true,
        HookHand:true
    })
    const [errors, setErrors] = useState([]); 

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post("http://localhost:8000/api/pirate/new", pirate)
        .then((res) => {setPirates([...pirates,pirate]);navigate("/pirates")})
        .catch(err=>{
            const errorResponse = err.response.data.errors;
            const errorArr = [];
            for (const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        })            
    }
    return (
        <div>
            <div className='topBar d-flex justify-content-center align-items-center mb-5'>
                <h1 className='mx-5'>Add Pirate</h1>
                <Link className='btn btn-primary' to={"/pirates"}>Crew Board</Link>
            </div>
            <div className='container'>
                <PirateForm pirates={pirates} setPirates={setPirates} handleSubmit={handleSubmit} pirate={pirate} setPirate={setPirate} errors={errors}/>
            </div>
        </div>
    )
}

export default AddPirate