import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
    const [kage]  = ("du får kage")
if (count ==10) {
    kage
}
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
          <a href="https://www.Youtube.com/"><img src="https://www.tutorialspoint.com/assets/questions/media/426142-1668760872.png" />
          </a>

      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit få 10 and bliv uBongoet
        </p>

      </div>
        <p className="read-the-docs">
            Click on the Vite and React logos to learn more
        </p>
    </>
  )
}

export default App
