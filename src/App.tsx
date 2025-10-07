import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
    

  return (
    <div className="parent w-md rounded bg-white shadow-lg text-black p-3">
      <div className="increase p-3 border rounded w-16 mx-auto my-3" onClick={e => {
        setCount(prev => prev + 1)
      }}>+</div>
      <div className="number">{count}</div>
      <div className="decrease p-3 border rounded w-16 mx-auto my-3" onClick={e => {
        setCount(prev => prev - 1)
      }}>-</div>
    </div>
  )
}

export default App
