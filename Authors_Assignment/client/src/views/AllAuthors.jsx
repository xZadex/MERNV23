import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
    Link,
} from "react-router-dom";


const AllAuthors = () => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/author")
            .then( res => {
                const sortedAuthors = res.data.authors.sort((a, b) => a.name.localeCompare(b.name));
                setAuthors(sortedAuthors)
            })
            .catch( err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/api/author/${id}`)
            .then(res => {
                console.log(res);
                setAuthors(authors.filter( item => item._id !== id));

            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h2 className='text-center  m-5'>All Authors</h2>
            <table className='table table-light table-striped table-hover table-bordered'>
                <thead>
                    <tr>
                        <th className='text-center'>Author</th>
                        <th className='text-center'>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authors.map( (item, i) => 
                            <tr key={i}>
                                <td className='text-center'>{item.name}</td>
                                <td className='actions-container'>
                                    <Link to={`/authors/${item._id}/edit`} className='link'><button>Edit</button></Link>
                                    <button onClick={() => handleDelete(item._id)}>Delete</button>
                                </td>
                            </tr>                       
                    )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AllAuthors