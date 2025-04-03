import React, { useState } from 'react'
import "./Sort.scss"
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '@/store/features/products/productSlice';

const Sort = () => {
  const dispatch = useDispatch();

  const {filterLabels, selectedFilter} = useSelector(state => state.products);

  const [filterIsOpen, setFilterIsOpen] = useState(false)

  const handleSelectFilter = (label) => {
     dispatch(selectFilter(label));
    localStorage.setItem('selectedFilter', JSON.stringify(label))
    setFilterIsOpen(!filterIsOpen)
  }

  const handleOpenModal = () => {
    setFilterIsOpen(!filterIsOpen)
  }

  return (
    <div className="filter-sort">
      <div className='filter-sort__label' onClick={handleOpenModal}>Сортировать по: <span>{selectedFilter?.title}</span></div>

      {
        filterIsOpen && (
          <div className="filter-sort__dropdown">
            <ul>
              {
                filterLabels && filterLabels.map(label => <li key={label?.id} onClick={() => handleSelectFilter(label)}>{label?.title}</li>)
              }
            </ul>
          </div>
        )
      }
    </div>
  )
}

export default Sort