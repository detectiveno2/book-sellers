import { createAction } from '@reduxjs/toolkit'
import CounterActionType from '../action-types/counter.action-type'

// declare an action: createAction<payloadType, actionType>(actionType)

export const increment = createAction(CounterActionType.INCREMENT)
export const decrement = createAction(CounterActionType.DECREMENT)
export const incrementByAmount = createAction<
	number,
	CounterActionType.INCREMENT_BY_AMOUNT
>(CounterActionType.INCREMENT_BY_AMOUNT)
