import { useState } from 'react'
import { useAppDispatch, useAppSelector } from './states/hooks'

import './App.scss'
import {
  decrement,
  increment,
  incrementByAmount,
} from './states/actions/counter.action'

interface IState {
  input: string
}

const App: React.FC = () => {
  const [input, setInput] = useState<IState['input']>('')
  const dispatch = useAppDispatch()
  const counter = useAppSelector(state => state.counter)

  const handleDecrementClick = () => {
    dispatch(decrement())
  }

  const handleIncrementClick = () => {
    dispatch(increment())
  }

  const handleIncrementByAmountClick = () => {
    dispatch(incrementByAmount(parseInt(input)))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  return (
    <div className='App'>
      <span className='font-bold size-20 cl_amaranth'>test font</span>
      <div>
        <span>{counter.value}</span>
      </div>
      <button onClick={handleDecrementClick}>-</button>
      <button onClick={handleIncrementClick}>+</button>
      <input type='text' name='amount' value={input} onChange={handleChange} />
      <button onClick={handleIncrementByAmountClick}>add by amount</button>
    </div>
  )
}

export default App
