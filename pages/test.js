import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setValue, appendValue, clearValue } from '../redux/worker/worker'

const WorkerComponent = () => {
  const dispatch = useDispatch()
  const worker = useSelector((state) => state.worker.value)
  const [inputValue, setInputValue] = useState("")

  const handleSetValue = () => {
    dispatch(setValue(inputValue))
  }

  const handleAppendValue = () => {
    dispatch(appendValue(inputValue))
  }

  const handleClearValue = () => {
    dispatch(clearValue())
  }

  return (
    <div className='mt-52'>
      <h1>Worker Value: {worker}</h1>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
      />
      <button onClick={handleSetValue}>Set Value</button>
      <button onClick={handleAppendValue}>Append Value</button>
      <button onClick={handleClearValue}>Clear Value</button>
    </div>
  )
}

export default WorkerComponent
