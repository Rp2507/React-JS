import React, { useState } from 'react'

function Form() {
    const [value, setvalue] = useState({})
    const handel = (e) => (
        // console.log(e.target.value)
        setvalue({ ...value, [e.target.name]: e.target.value })
    )
    console.log(value);

    return (
        <div>
            <h3>Get Data in Form</h3>
            <input type='text' name='fname' placeholder='First Name' onChange={handel} />
            <input type='text' name='lname' placeholder='Last Name' onChange={handel} />
        </div>
    )
}

export default Form