import React from 'react'
import ProductCategoryRow from '../ProductCategoryRow/ProductCategoryRow'
import ProductRow from '../ProductRow/ProductRow'

const ProductTable = ({ products }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>

      <tbody>
        {
          products && products.map(category => (
            category.data.length > 0
              ? <React.Fragment key={category.id}>
                <ProductCategoryRow key={category.id} name={category.category} />

                {
                  category.data && category.data.map((product, index) => <ProductRow
                    key={index}
                    stocked={product.stocked}
                    name={product.name}
                    price={product.price}
                  />)
                }
              </React.Fragment>
              : null
          ))
        }
      </tbody>


    </table>
  )
}

export default ProductTable