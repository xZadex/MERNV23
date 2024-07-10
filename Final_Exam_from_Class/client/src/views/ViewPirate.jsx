import React from 'react'
import { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios'
import { useParams } from "react-router";

const ViewPirate = () => {
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

    return (
        <div>
            <div className='topBar d-flex justify-content-center align-items-center mb-5'>
                <h1 className='mx-5'>{pirate.Name}</h1>
                <Link className='btn btn-primary' to={"/pirates"}>Crew Board</Link>
            </div>
            <div className='container'>
            <div className='d-flex justify-content-around align-items-center '>
                <div className='left-column d-flex flex-column justify-content-center align-items-center'>
                    <img src={pirate.Image} alt="" height="200px" width="200px"/>
                    <h2 className='mt-2'><strong>"{pirate.CatchPhrase}"</strong></h2>
                </div>
                <div className='right-column d-flex flex-column justify-content-center'>
                    <h2 className='text-center'>About</h2>
                    <p>Position: {pirate.CrewPosition}</p>
                    <p>Treasure: {pirate.Chests}</p>
                    <p>Peg Leg: {pirate.PegLeg === true ? "Yes": "No"}</p>
                    <p>Eye Patch: {pirate.EyePatch === true ? "Yes": "No"}</p>
                    <p>Hook Hand: {pirate.HookHand === true ? "Yes": "No"}</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ViewPirate