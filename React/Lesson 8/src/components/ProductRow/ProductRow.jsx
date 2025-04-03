import React from 'react'

const ProductRow = ({ stocked, name, price }) => {
  return (
    <tr>
      <td className={!stocked ? "text-red" : ""}>{name}</td>
      <td>{price}</td>
    </tr>
  )
}

export default ProductRow