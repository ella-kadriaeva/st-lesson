import React from 'react'

const SearchBar = ({changeStocked, searchValue}) => {
  return (
    <div className="shop__search">
      <input type="text" onChange={searchValue}/>

      <label>
        <input type="checkbox" name="" id="" onChange={changeStocked}/>
        <span>Only show products in stock</span>
      </label>
    </div>
  )
}

export default SearchBar