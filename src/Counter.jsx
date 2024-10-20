import { useState } from "react"


export default function Counter() {
    const [count, setCount] = useState(0)

    const handleClickCounter1 = () => {
        const newCounter = count + 1
        setCount(newCounter)
    }
    const handleClickCounter2 = () => {
        const newCounter = count - 1
        setCount(newCounter)
    }
    // --------Style-CSS--------
    const teamStyle = {
        border: '2px solid red',
        padding: '2rem',
        borderRadius: '1rem',
        marginTop: '1rem'
    }
    // ---------Return---------
    return (
        <div style={teamStyle}>
            <h3>Counter: {count}</h3>
            <div>
                <button onClick={handleClickCounter1}>Counter ++</button>
                <button onClick={handleClickCounter2}>Counter --</button>
            </div>
        </div>
    )
}