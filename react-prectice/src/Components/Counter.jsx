import React from 'react'
import { useState } from 'react'

function Counter() {

    const [counter, setcounter] = useState(10)

    const addValue = () => {
        setcounter(counter + 1)
    }
    const removeValue = () => {
        setcounter(counter - 1)
    }
    return (
        <div>
            <h1>Counter Value: {counter} </h1>
            <button onClick={addValue}>Add Value</button>
            <button onClick={removeValue}>Remove Value</button>
        </div>
    )
}

export default Counter