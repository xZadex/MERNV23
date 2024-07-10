import React from 'react';


const ProductForm = (props) => {
    const {handleSubmit, handleUpdate, setTitle, setPrice, setDescription, price, title, description, setUpdatedTitle, setUpdatedPrice, setUpdatedDescription, updatedTitle, updatedDescription, updatedPrice} = props;

    return (
        <>
        {
            handleSubmit?

            <form onSubmit={handleSubmit}>
                <div className='form-container'>
                    <label >Title: </label>
                    <input type="text" placeholder='Title' required onChange={(e) => setTitle(e.target.value)} value={title} />
                </div>
                <div className='form-container'>
                    <label>Price: </label>
                    <input type="text" placeholder='$0.00' required onChange={(e) => setPrice(e.target.value)} value={price}/>
                </div>
                <div className='form-container'>
                    <label>Description: </label>
                    <input type="text" placeholder='Description' required onChange={(e) => setDescription(e.target.value)} value={description}/>
                </div>
                <button type='submit' className='btn btn-warning create-button'>Create Product</button>
            </form>
            :
            <form onSubmit={handleUpdate}>
                <p><strong>Title: </strong><input type="text" value={updatedTitle} onChange={(e) => setUpdatedTitle(e.target.value)}/></p>
                <p><strong>Price: </strong><input type="text" value={updatedPrice} onChange={(e) => setUpdatedPrice(e.target.value)}/></p>
                <p><strong>Description: </strong><input type="text" value={updatedDescription} onChange={(e) => setUpdatedDescription(e.target.value)}/></p>
                <button type='submit' className='btn btn-warning'>Edit</button>
            </form>
        }
        </>
    )
}

export default ProductForm