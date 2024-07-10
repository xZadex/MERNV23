import React from 'react';
import { useParams } from 'react-router-dom';

const Number = () => {
    const { num } = useParams();
    return (
        <div>The number is: {num}</div>
    )
}

export default Number