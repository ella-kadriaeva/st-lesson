import React from 'react'
import Product from './components/Product/Product'

const products = [
  {
      "category": {
          "id": 1,
          "name": "Clothes"
      },
      "_id": "659e8a485f3b1887ef3212db",
      "id": 2,
      "title": "Handcrafted Frozen Ball",
      "price": 280,
      "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
      "images": [
          "https://iili.io/dAyUpkJ.jpg",
          "https://iili.io/dAygJXp.jpg",
          "https://iili.io/dAygHIR.jpg"
      ]
  },
  {
      "category": {
          "id": 1,
          "name": "Clothes"
      },
      "_id": "659e8a485f3b1887ef3212e0",
      "id": 8,
      "title": "Incredible Steel Mouse",
      "price": 356,
      "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
      "images": [
          "https://iili.io/dR9YBln.jpg",
          "https://iili.io/dR9YoHG.jpg",
          "https://iili.io/dR9YCSs.jpg"
      ]
  },
  {
      "category": {
          "id": 1,
          "name": "Clothes"
      },
      "_id": "659e8a485f3b1887ef3212e2",
      "id": 10,
      "title": "Licensed Soft Ball",
      "price": 482,
      "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
      "images": [
          "https://iili.io/dR17hYu.jpg",
          "https://iili.io/dR17V49.jpg",
          "https://iili.io/dR17X2e.jpg"
      ]
  },
  {
      "category": {
          "id": 1,
          "name": "Clothes"
      },
      "_id": "659e8a485f3b1887ef3212e3",
      "id": 11,
      "title": "Unbranded Cotton Pizza",
      "price": 38,
      "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
      "images": [
          "https://iili.io/dR1aaWl.jpg",
          "https://iili.io/dR1acs2.jpg",
          "https://iili.io/dR1aYx4.jpg"
      ]
  },
  {
      "category": {
          "id": 2,
          "name": "Electronics"
      },
      "_id": "659e8a485f3b1887ef3212ef",
      "id": 23,
      "title": "Fantastic Steel Pants",
      "price": 3,
      "description": "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      "images": [
          "https://iili.io/dR1a5bf.jpg",
          "https://iili.io/dR1aEg9.jpg",
          "https://iili.io/dR1aMJe.jpg"
      ]
  },
  {
      "category": {
          "id": 3,
          "name": "Furniture"
      },
      "_id": "659e8a485f3b1887ef3212f7",
      "id": 31,
      "title": "Unbranded Fresh Pizza",
      "price": 568,
      "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
      "images": [
          "https://iili.io/dR1aXbj.jpg",
          "https://iili.io/dR1ajzx.jpg",
          "https://iili.io/dR1awWQ.jpg"
      ]
  },
  {
      "category": {
          "id": 4,
          "name": "Shoes"
      },
      "_id": "659e8a485f3b1887ef3212ff",
      "id": 40,
      "title": "Oriental Bronze Computer",
      "price": 456,
      "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
      "images": [
          "https://iili.io/dR1lRn4.jpg",
          "https://iili.io/dR1l5Ml.jpg",
          "https://iili.io/dR1l7P2.jpg"
      ]
  }
]

const App = () => {
  return (
    <div className='products'>
        <div className="title">Products</div>

        <div className="products-list">
            {
              products && products.map(product => <Product 
                  key={product._id}
                  title={product.title}
                  price={product.price}
                  image={product.images[0]}
              />)
            }
        </div>
    </div>
  )
}

export default App