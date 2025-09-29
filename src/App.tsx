import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/logo.svg'
import './App.css'
import { getAPIURL } from './utils'

function App() {
  const [count, setCount] = useState(0)
  const [api, setApi] = useState('error')
  getAPIURL().then(url => setApi(url));
  return (
    <>
      <div>
        <a href="https://github.com/janfeshanm" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>[{ api }]</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
