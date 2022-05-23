import React from 'react'

function Search ({
  placeHolder,
  searchValue,
  setSearchValue
}) {
  const handleChange = (e) => {
    e.persist()
    setSearchValue(e.target.value)
  }

  return (
    <>
      <label className='search'>
        <h2 className='search-title'>Add some text</h2>
        <input
          className='search-input'
          type='text'
          placeholder={placeHolder}
          value={searchValue}
          onChange={handleChange}
        />
      </label>
    </>
  )
}

export { Search }
