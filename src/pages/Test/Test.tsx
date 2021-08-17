import { useState } from 'react'

import { useAppDispatch, useAppSelector } from '../../states/hooks'
import {
  decrement,
  increment,
  incrementByAmount,
} from '../../states/actions/counter.action'
import { Avatar, ModifiedButton, PrimaryButton } from '../../components'

import './Test.scss'
import { ActivedLikeIcon, LikeIcon } from '../../assets/svgs'

interface IState {
  input: string
}

const Test: React.FC = () => {
  const [input, setInput] = useState<IState['input']>('')
  const [testModifiedBtn, setTestModifiedBtn] = useState<boolean>(false)
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

  const handleTestModifiedBtnClick = () => {
    setTestModifiedBtn(!testModifiedBtn)
  }

  return (
    <div className='test'>
      {/* Test font */}
      <div>
        <span className='font-bold size-20 cl_amaranth'>test font</span>
      </div>
      {/* Test redux */}
      <div>
        <span>{counter.value}</span>
        <button onClick={handleDecrementClick}>-</button>
        <button onClick={handleIncrementClick}>+</button>
        <input
          type='text'
          name='amount'
          value={input}
          onChange={handleChange}
        />
        <button onClick={handleIncrementByAmountClick}>add by amount</button>
      </div>
      {/* Test PrimaryButton component */}
      <div>
        <PrimaryButton text='Click Me' handleClick={handleIncrementClick} />
      </div>
      {/* Test Avatar component */}
      <div>
        <Avatar src={'https://loremflickr.com/320/240'} />
      </div>
      {/* Test ModifiedButton component */}
      <div>
        <a href='#'>
          <ModifiedButton
            activeIcon={ActivedLikeIcon}
            disableIcon={LikeIcon}
            condition={testModifiedBtn}
            handleClick={handleTestModifiedBtnClick}
          />
        </a>
      </div>
    </div>
  )
}

export default Test
