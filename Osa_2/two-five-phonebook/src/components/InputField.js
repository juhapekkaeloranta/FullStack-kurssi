import React from 'react'

const InputField = ({ textField, stateValue, handleChange, handleClick }) => {
  return (
    <div>
      {textField}
      <input
        value={stateValue}
        onChange={handleChange}
        onClick={handleClick}
      />
    </div>
  )
}

export default InputField