import React from 'react'

const ProductCategoryRow = ({ name }) => {
  return (
    <tr>
      <th colSpan={2}>{name}</th>
    </tr>
  )
}

export default ProductCategoryRow