import { useSelector } from 'react-redux'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Decrement, Increment, IncrementIfOdd } from './Components'
import UseDispatch from './UseDispatch'
import Connect from './connect'

function App () {
  const counter = useSelector(state => state.counter)
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>count is {counter.count}</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
        <p>use dispatch</p>
        <UseDispatch />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10 }}>
        <p>connect</p>
        <Connect />
      </div>
      <Increment />
      <Decrement />
      <IncrementIfOdd />
    </>
  )
}

export default App
