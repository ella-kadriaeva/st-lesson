import React from 'react'
import "./Filter.scss"

const Filter = () => {
  return (
    <div className="filter">
      <div className='filter__label'>Сортировать по: <span>цене</span></div>

      <div className="filter__dropdown">
        <ul>
          <li>По цене</li>
          <li>По популярности</li>
        </ul>
      </div>
    </div>
  )
}

export default Filter