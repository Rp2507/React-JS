import React, { useState } from 'react'
import { Data } from './Data';
import { useEffect } from 'react';

function Crud() {
    console.log(Data);
    const [result, setresult] = useState([])
    console.log(result);
    const [value, setvalue] = useState({})
    const handle = (e) => {
        setvalue({ ...value, [e.target.name]: e.target.value })
    }
    console.log(value, 'val');

    const handleSubmit = () => {
        setresult([...result, value])
    }

    useEffect(() => {
        setresult(Data);
    }, []);

    return (
        <div>
            <input type='text' name='author' placeholder='Enter AuthorName' onChange={handle} />
            <input type='text' name='title' placeholder='Enter Title' onChange={handle} />
            <button onClick={handleSubmit}>Add</button>
            <div>
                {
                    result.map(
                        (val, ind) => {
                            return (
                                <>
                                    <h1>{val.author}</h1>
                                    <h3>{val.title}</h3>
                                </>
                            )
                        })}
            </div>
        </div>
    )
}

export default Crud