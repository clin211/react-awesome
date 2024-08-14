import { useState, Suspense } from 'react'
import classNames from 'classnames';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App () {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <Logo href="https://vitejs.dev" src={viteLogo} alt="Vite logo" />
        <Logo href="https://react.dev" src={reactLogo} className="react" alt="React logo" />
      </div>
      <h1>Vite + React</h1>
      <Counter />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <List />
    </Suspense>
  )
}

function Logo (props) {
  return <a href={props.href} target="_blank">
    <img src={props.src} className={classNames('logo', props.className)} alt={props.alt} />
  </a>
}

function Counter () {
  const [count, setCount] = useState(0)
  return <div className="card">
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
    <p>
      Edit <code>src/App.jsx</code> and save to test HMR
    </p>
  </div>
}

function List () {
  return <div>
    {Array.from({ length: 10000 }).map((_, index) => <p key={index}>{index}</p>)}
  </div>
}

export default App
