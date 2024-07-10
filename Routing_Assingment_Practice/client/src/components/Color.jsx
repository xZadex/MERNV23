import React from 'react';
import { useParams } from 'react-router-dom';

const Color = () => {
    const {word,color1,color2} = useParams();

    return (
        <div style={{backgroundColor: color2}}><p style={{color: color1}}>The word is: {word}</p></div>
    )
}

export default Color