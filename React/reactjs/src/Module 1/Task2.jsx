import React, { useState } from 'react'

const Task2 = () => {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }   
    const decrement = () => {
        setCount(count - 1)
    }
    return (
        <div>
            <div className='container'>
                <h1 className='text-center text-primary mt-5'>Counter App</h1>
                <h1 className='my-5 text-center'>{count}</h1>
                <div className="btn-group gap-2" role="group" aria-label="Btns">
                    <button type="button" onClick={increment} className="btn btn-primary">Increment</button>
                    <button type="button" onClick={() => setCount(0)} className="btn btn-secondary">Reset</button>
                    <button type="button" onClick={decrement} className="btn btn-danger">Decrement</button>
                </div>
            </div>
        </div>
    )
}

export default Task2
