import React from 'react'
import { useEffect } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios'

const Main = (props) => {
    const {pirates, setPirates, deletePirate} = props;
    useEffect(()=>{
        axios.get("http://localhost:8000/api/pirates")
        .then((res)=>{
            let test = res.data.pirates
            let sorted = test.sort((a, b) => a.Name.localeCompare(b.Name))
            console.log(sorted)
            setPirates(sorted)
        })
        .catch((err)=> {return console.log('You ran into an error getting authors', err)})
    },[setPirates])

    return (
        <div>
            <div className='topBar d-flex justify-content-center align-items-center mb-5'>
                <h1 className='mx-5'>Pirate Crew</h1>
                <Link className='btn btn-primary' to={"/pirate/new"}>Add Pirate</Link>
            </div>
            <div className='d-flex flex-column justify-content-center align-items-center gap-4'>
                {
                    pirates.map((pirate, i) => {
                        return (
                            <div className="pirateCard p-4" key={i}>
                                <div className="d-flex justify-content-center align-items-center gap-5">
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <img src={pirate.Image} alt="" height="100px" width="100px"/>
                                    </div>
                                    <div className='d-flex flex-column text-center'>
                                        <h3>{pirate.Name}</h3>
                                        <div className='d-flex gap-2 justify-content-center align-items-center'>
                                        <Link type="button" className="btn btn-success" to={`/pirate/${pirate._id}`}>View Pirate</Link>
                                        <Link type="button" className="btn btn-warning" to={`/pirate/edit/${pirate._id}`}>Edit Pirate</Link>
                                        <button className='btn btn-danger' onClick={(e)=>{deletePirate(pirate._id)}}>Walk the Plank</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Main