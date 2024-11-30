'use client'
import React from 'react'
import type { RootState } from '../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../features/counter/CounterSLice'

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
        className='bg-red p-5 bottom-2'
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
           className='bg-red p-5 bottom-2'
        >
          Decrement
        </button>
      </div>
    </div>
  )
}