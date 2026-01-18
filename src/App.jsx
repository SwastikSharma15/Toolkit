import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './redux/features/counterSlice';

const App = () => {

  const dispatach = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const [ num, setNum ] = useState(null);

  return (
    <div>
      <h1>
        {count}
      </h1>
      <button onClick={() => {
        dispatach(increment())
      }}>
        Increment
      </button>

      <button onClick={() => {
        dispatach(decrement())
      }}>
        Decrement
      </button>

      <input type='number' value={num} onChange={(e) => setNum(e.target.value)}  />

      <button onClick={() => {
        dispatach(incrementByAmount(Number(num)))
      }}>
        Increment by Amount
      </button>

    </div>
  )
}

export default App