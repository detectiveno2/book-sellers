import { createReducer } from '@reduxjs/toolkit'
import {
	decrement,
	increment,
	incrementByAmount,
} from '../actions/counter.action'

const intitialState = {
	value: 0,
}

const counterReducer = createReducer(intitialState, builder => {
	builder
		.addCase(increment, state => {
			state.value += 1
		})
		.addCase(decrement, state => {
			state.value -= 1
		})
		.addCase(incrementByAmount, (state, action) => {
			state.value += action.payload
		})
})

export default counterReducer
