import { useState } from 'react'

function App() {
  
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="main">
        <h1>Count {count}</h1>
        <button className="btn" onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <button className="btn" onClick={() => setCount(count - 1)}>
          Decrement
        </button>
      </div>
    </>
  );
}

export default App
