import React, { useEffect, useState } from 'react'
import FilterableProductTable from './components/FilterableProductTable/FilterableProductTable'

let products = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]


const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    let groupedData = [];

    for (let i = 0; i < products.length; i++) {
      const product = products[i];

      let category = groupedData.find(item => item.category === product.category);

      if (!category) {
        category = {
          id: (groupedData.length + 1).toString(),
          category: product.category,
          data: []
        };

        groupedData.push(category);
      }

      category.data.push({
        price: product.price,
        stocked: product.stocked,
        name: product.name
      });
    }

    setData(groupedData)
  }, [])

  return <FilterableProductTable products={data} />
}

export default App