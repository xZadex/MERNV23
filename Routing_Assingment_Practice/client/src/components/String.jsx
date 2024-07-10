import React from 'react';
import { useParams } from 'react-router-dom';

const String = () => {
    const { word } = useParams();

    return (
        <div>
        {
            isNaN(+word) ?
            <div>The word is: {word}</div>
            :
            <div>The number is: {word}</div>
        }
        </div>
    )
}

export default String