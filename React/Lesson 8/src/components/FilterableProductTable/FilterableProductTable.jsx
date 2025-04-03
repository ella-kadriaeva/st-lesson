import React, { useEffect, useState } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import ProductTable from '../ProductTable/ProductTable'

const FilterableProductTable = ({ products }) => {
  const [isStocked, setIsStocked] = useState(false);

  const [searchValue, setSearchValue] = useState("");

  const [filteredProduct, setFilteredProduct] = useState([]);

  const handleChangeStocked = (e) => setIsStocked(e.target.checked);

  const handleSearchValue = (e) => setSearchValue(e.target.value)

  const data = !isStocked
    ? products
    : products.map(category => ({
      ...category,
      data: category.data.filter(product => product.stocked)
    }))

  useEffect(() => {
    setFilteredProduct(data.map(category => ({
      ...category,
      data: category.data.filter(product => product.name.toLowerCase().includes(searchValue.toLowerCase()))
    })))

  }, [searchValue, isStocked])

  const filteredData = searchValue.length > 0 ? filteredProduct : data;

  return (
    <div className='shop'>
      <SearchBar changeStocked={handleChangeStocked} searchValue={handleSearchValue} />

      <div className="shop__content">
        <ProductTable products={filteredData} />
      </div>
    </div>
  )
}

export default FilterableProductTable