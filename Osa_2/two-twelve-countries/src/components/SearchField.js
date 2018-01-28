import React from 'react'

const SearchField = ({promptText, hintText, handleChange}) => {
  return (
    <div>
      {promptText}
        <input
        value={hintText}
        onChange={handleChange}
      />
    </div>
  )
}

export default SearchField