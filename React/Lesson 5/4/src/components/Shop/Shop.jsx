import React, { useState } from 'react'
import Card from '../Card/Card'

const Shop = () => {
    const [products, setProducts] = useState([
        {
            id: "1",
            title: "Product 1",
            price: 15
        },
        {
            id: "2",
            title: "Product 1",
            price: 16
        },
        {
            id: "3",
            title: "Product 1",
            price: 12
        }
    ])

    const removePorduct = (productId) => {
        setProducts(products.filter(item => item.id !== productId))
    }

    const editPorduct = (productId, title) => {
        setProducts(products.map(item => item.id === productId ? { ...item, title } : item))
    }


    console.log(products)
    return (
        <div>
            <ul>
                {
                    products && products.map(item => <Card
                    id={item.id}
                        title={item.title}
                        price={item.price}
                        onRemove={() => removePorduct(item.id)}
                        onEdite={editPorduct}
                    />)
                }
            </ul>
        </div>
    )
}

export default Shop