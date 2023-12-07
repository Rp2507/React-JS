import axios from 'axios';
import React, { useState } from 'react'

export function CrudApp() {

    const [name, setname] = useState('');
    const [age, setage] = useState('');
    const [email, setemail] = useState('');

    // console.log(name, age, email);


    // Add Data Post
    const submit = (e) => {
        e.preventDefault(); //form thi page refresh na  thay aetle
        axios.post('http://localhost:3001/posts', {
            e_name: name,
            e_age: age,
            e_email: email
        })
    }

    return (
        <>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='bg-primary p-4 text-center'>
                        <h1>Create Data</h1>
                    </div>
                    <form onSubmit={submit}>
                        <div className='form-group'>
                            <label>Enter Name: </label>
                            <input type='text' placeholder='Name' className='form-control' onChange={(e) => setname(e.target.value)} />
                        </div>
                        <div className='form-group'>
                            <label>Enter Age: </label>
                            <input type='number' placeholder='AGe' className='form-control' onChange={(e) => setage(e.target.value)} />
                        </div>
                        <div className='form-group'>
                            <label>Enter Email: </label>
                            <input type='email' placeholder='email' className='form-control' onChange={(e) => setemail(e.target.value)} />
                        </div>

                        <br /><br />
                        <div className='d-grid'>
                            <input type='submit' className='btn btn-primary' />
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}
