import React from 'react'

const DeleteButton = (props) => {
    const {successCallback} = props;
    return (
        <>
        <i className="fa-solid fa-trash action-button" onClick={successCallback}></i>
        </>
    )
}

export default DeleteButton