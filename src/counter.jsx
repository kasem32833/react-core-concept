import { useState } from "react";

export default function Counter(){
const [count, setCount] = useState(0)

function increaseHandler(){
    const newCount = count + 1;
    setCount(newCount)
}

function decreaseHandler(){
    setCount(count - 1);
}

const counterStyle= {
    border: '2px solid tomato',
    padding: '20px'
}

return(
    <>
        <div style={counterStyle}>
            <h3>Counter: {count}</h3>
            <button onClick={increaseHandler}>Increase</button>
            <button onClick={decreaseHandler}>Decrease</button>
        </div>
       
    </>
)
}