import React from 'react'

const SearchField = ({text, handleChange}) => {
  return (
    <div>
      Haku:
        <input
        value={text}
        onChange={handleChange}
      />
    </div>
  )
}

export default SearchField