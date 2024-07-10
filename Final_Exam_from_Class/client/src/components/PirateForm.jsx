import React from 'react'
import { useState } from 'react'

const PirateForm = (props) => {
    const {handleSubmit, pirate, setPirate, errors, editPage} = props;
    const[PegLeg, setPegLeg] = useState(true)
    const[EyePatch, setEyePatch] = useState(true)
    const[HookHand, setHookHand] = useState(true)

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <div className='d-flex gap-4'>
                    <div className='left-column col-6'>
                        <div className='form-group'>
                            <label>Pirate Name:</label>
                            {
                                (editPage)
                                ? <input className="form-control"type="text" value={pirate.Name} onChange={(e)=>{setPirate({...pirate,Name:e.target.value})}} required/>
                                : <input className="form-control"type="text" onChange={(e)=>{setPirate({...pirate,Name:e.target.value})}} required/>
                            }
                            
                        </div>
                        <div className='form-group'>
                            <label>Image URL:</label>
                            {
                                (editPage)
                                ? <input className="form-control"type="text" value={pirate.Image} onChange={(e)=>{setPirate({...pirate,Image:e.target.value})}} required/>
                                : <input className="form-control"type="text" onChange={(e)=>{setPirate({...pirate,Image:e.target.value})}} required/>
                            }
                        </div>
                        <div className='form-group'>
                            <label># of Treasure Chests:</label>
                            {
                                (editPage)
                                ? <input className="form-control" type="number" value={pirate.Chests} step="1" onChange={(e)=>{setPirate({...pirate,Chests:e.target.value})}} required/>
                                : <input className="form-control" type="number" step="1" onChange={(e)=>{setPirate({...pirate,Chests:e.target.value})}} required/>
                            }
                        </div>
                        <div className='form-group'>
                            <label>Pirate Catch Phrase:</label>
                            {
                                (editPage)
                                ? <input className="form-control"type="text" value={pirate.CatchPhrase} onChange={(e)=>{setPirate({...pirate,CatchPhrase:e.target.value})}} required/>
                                : <input className="form-control"type="text" onChange={(e)=>{setPirate({...pirate,CatchPhrase:e.target.value})}} required/>
                            }
                        </div>
                    </div>
                    <div className='right-column col-6'>
                        <div className='form-group'>
                            <label>Crew Position:</label>
                            {
                                (editPage)
                                ?<select className='form-control' value={pirate.CrewPosition} onChange={(e)=>{setPirate({...pirate,CrewPosition:e.target.value})}} required>
                                    <option value="Captain">Captain</option>
                                    <option value="First Mate">First Mate</option>
                                    <option value="Quarter Master">Quarter Master</option>
                                    <option value="Boatswain">Boatswain</option>
                                    <option value="Powder Monkey">Powder Monkey</option>
                                </select>
                                :<select className='form-control' onChange={(e)=>{setPirate({...pirate,CrewPosition:e.target.value})}} required>
                                    <option defaultValue="Captain">Captain</option>
                                    <option value="First Mate">First Mate</option>
                                    <option value="Quarter Master">Quarter Master</option>
                                    <option value="Boatswain">Boatswain</option>
                                    <option value="Powder Monkey">Powder Monkey</option>
                                </select>
                            }
                        </div>
                        <div className='form-group d-flex align-items-center gap-2 mt-2'>
                            {
                                (PegLeg === true)
                                ?<input type="checkbox" value={true} checked onChange={(e)=>{setPegLeg(false);setPirate({...pirate,PegLeg:false})}}/>
                                :<input type="checkbox" value={false} onChange={(e)=>{setPegLeg(true);setPirate({...pirate,PegLeg:true})}}/>
                            }
                            <label>Peg Leg</label>
                        </div>
                        <div className='form-group d-flex align-items-center gap-2 mt-2'>
                            {
                                (EyePatch === true)
                                ?<input type="checkbox" value={true} checked onChange={(e)=>{setEyePatch(false);setPirate({...pirate,EyePatch:false})}}/>
                                :<input type="checkbox" value={false} onChange={(e)=>{setEyePatch(true);setPirate({...pirate,EyePatch:true})}}/>
                            }
                            <label>Eye Patch</label>
                        </div>
                        <div className='form-group d-flex align-items-center gap-2 mt-2'>
                            {
                                (HookHand === true)
                                ?<input type="checkbox" value={true} checked onChange={(e)=>{setHookHand(false);setPirate({...pirate,HookHand:false})}}/>
                                :<input type="checkbox" value={false} onChange={(e)=>{setHookHand(true);setPirate({...pirate,HookHand:true})}}/>
                            }
                            <label>Hook Hand</label>
                        </div>
                        <div className='d-flex justify-content-center align-items-center mt-5'>
                            {
                                (editPage)
                                ?<button className='btn btn-primary px-5' type='submit'>Edit Pirate</button>
                                :<button className='btn btn-primary px-5' type='submit'>Add Pirate</button>
                            }
                            
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default PirateForm