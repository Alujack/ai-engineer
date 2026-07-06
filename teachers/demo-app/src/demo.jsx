import "react"
import {useState} from "react"

const DemoApp = () => {
    const [color, setColor] = useState("red")
    const [counts, setCounts] = useState(0)
  return (
    <div>
      <button onClick={() => setColor("blue") || setCounts(counts + 1)} 
      style={{ backgroundColor: color, fontSize: "16px", fontWeight: "bold" }}>Click Me</button>
      <p>attempted: {counts}</p>
    </div>
  )
}
export default DemoApp
