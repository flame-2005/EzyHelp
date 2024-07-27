import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setText, clearText } from '../redux/name/name'

const TextComponent = () => {
  const text = useSelector((state) => state.name.value)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    dispatch(setText(e.target.value))
  }

  const handleClear = () => {
    dispatch(clearText())
  }

  return (
    <div className='mt-52'>
      <input type="text" value={text} onChange={handleChange} data-testid="text-input" />
      <button onClick={handleClear} data-testid="clear-button">Clear</button>
      <p data-testid="text-display">{text}</p>
    </div>
  )
}

export default TextComponent
