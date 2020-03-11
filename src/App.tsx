import React from 'react'
import StoreProvider, { useStore } from './store'
import './App.scss'

const Counter: React.FC = () => {
  const { state, actions } = useStore()

  const onIncrease = () => {
    actions.increment()
  }

  const onIncreaseFive = () => {
    actions.increment(5)
  }

  const onDecrease = () => {
    actions.decrement()
  }

  const onDecreaseFive = () => {
    actions.decrement(5)
  }

  const onReset = () => {
    actions.reset()
  }

  return (
    <div className="App">
      {state.count}
      <br />
      <button onClick={onIncrease}>
        + 1
      </button>
      {' '}
      <button onClick={onIncreaseFive}>
        + 5
      </button>
      {' '}
      <button onClick={onDecrease}>
        - 1
      </button>
      {' '}
      <button onClick={onDecreaseFive}>
        - 5
      </button>
      {' '}
      <button onClick={onReset}>
        Reset
      </button>
    </div>
  )
}

const App: React.FC = () => {
  return (
    <StoreProvider>
      <Counter />
    </StoreProvider>
  )
}

export default App
