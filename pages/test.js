import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment} from '../redux/counter/counterSlice'

function App() { 
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
      <div className='mt-52'>
        <button onClick={() => dispatch(decrement())}>-</button>
        Currently count is {count}
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(multiply())}>*</button>
      </div>

  )
}

export default App