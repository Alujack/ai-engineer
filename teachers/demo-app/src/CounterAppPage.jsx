import "react"
import { useState } from "react"

export const CounterAppPage = () =>{
    const [counter, setCounter] = useState(0);

    return (
        <div style={{ backgroundColor:"pink", display: "flex", flexDirection: "column", gap: "10px", padding: "20px", borderRadius: "5px"   }}>
            <h1>Counter App</h1>
            <p>Count: {counter}</p>
            <div style={{display: "flex", gap: "10px", backgroundColor: "blue", padding: "10px", borderRadius: "5px"}}>  
               <button onClick={() => setCounter(counter + 1)}>Increment</button>
               <button onClick={() => setCounter(counter - 1)}>Decrement</button>
            </div>
        </div>
    )
} 