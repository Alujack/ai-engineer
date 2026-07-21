import "react"
import { useState } from "react"

export const CounterAppPage = () =>{
    const [counter, setCounter] = useState(0);

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", backgroundColor: "#f0f0f0", padding: "20px", borderRadius: "5px"   }}>
            <h1>Counter App</h1>
            <p>Count: {counter}</p>
            <div style={{display: "flex", gap: "10px"}}>  
                <button onClick={() => setCounter(counter + 1)}>Increment</button>
                <button onClick={() => setCounter(counter - 1)}>Decrement</button>
            </div>
        </div>
    )
}