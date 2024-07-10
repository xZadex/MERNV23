import React from 'react'
import { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios'
import PirateForm from '../components/PirateForm';
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";

const EditPirate = (props) => {
    const {pirates, setPirates} = props;
    const navigate = useNavigate();
    const { id } = useParams();
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
    const [editPage] = useState(true)
    const [errors, setErrors] = useState([]); 

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pirate/${id}`)
        .then((res) => {
            console.log(res.data.pirates)
            setPirate({
                Name:res.data.pirates.Name,
                Image:res.data.pirates.Image,
                Chests:res.data.pirates.Chests,
                CatchPhrase:res.data.pirates.CatchPhrase,
                CrewPosition:res.data.pirates.CrewPosition,
                PegLeg:res.data.pirates.PegLeg,
                EyePatch:res.data.pirates.EyePatch,
                HookHand:res.data.pirates.HookHand
            })
        })
    },[id,setPirate])


    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/pirate/update/${id}`, pirate)
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
                <h1 className='mx-5'>Edit Pirate</h1>
                <Link className='btn btn-primary' to={"/pirates"}>Crew Board</Link>
            </div>
            <div className='container'>
                <PirateForm editPage={editPage} pirates={pirates} setPirates={setPirates} handleSubmit={handleSubmit} pirate={pirate} setPirate={setPirate} errors={errors}/>
            </div>
        </div>
    )
}

export default EditPirate