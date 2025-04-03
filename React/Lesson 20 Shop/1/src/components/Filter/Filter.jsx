import React, { useState } from 'react'
import "./Filter.scss"

const Filter = ({ labels, selectedFilter, setSelectedFilter }) => {
  const [filterIsOpen, setFilterIsOpen] = useState(false)

  const handleSelectFilter = (label) => {
    setSelectedFilter(label);
    setFilterIsOpen(!filterIsOpen)
  }

  const handleOpenModal = () => {
    setFilterIsOpen(!filterIsOpen)
  }

  return (
    <div className="filter">
      <div className='filter__label' onClick={handleOpenModal}>Сортировать по: <span>{selectedFilter.title}</span></div>

      {
        filterIsOpen && (
          <div className="filter__dropdown">
            <ul>
              {
                labels && labels.map(label => <li key={label.id} onClick={() => handleSelectFilter(label)}>{label.title}</li>)
              }
            </ul>
          </div>
        )
      }
    </div>
  )
}

export default Filter