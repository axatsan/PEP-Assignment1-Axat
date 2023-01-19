import React, { useState } from 'react'
import Test2 from './Test2'
import './Test1.css'

function Text1() {
    const [name, setName] = useState("")
    const [submit, setSubmit] = useState(false)

    function reset() {
        setName('');
        setSubmit('');
    }

    return (
        <div className='components'>
            <div className='name__part'>
                <h1>Greeting new Students at Lovely Professional University</h1>
                <label>Enter Your Name -</label>
                &nbsp;&nbsp;
                <input
                    placeholder="full name"
                    value={name}
                    onChange={(event) => { setName(event.target.value) }}></input>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <div className='buttons'>
                    <button onClick={() => { setSubmit(!submit) }}>Submit</button>
                    <button onClick={reset}>reset</button>
                    <p>{(submit && name) && <Test2 name={name} className='test2'></Test2>}</p>
                </div>
            </div>

        </div>
    )
}

export default Text1