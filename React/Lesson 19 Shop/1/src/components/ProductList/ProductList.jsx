import React, { useEffect } from 'react'
import { LuShoppingBag } from 'react-icons/lu'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { addToCart } from '@/store/features/cart/cartSlice'
import { fetchProductsByCategoryId } from '../../store/api/product'

const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.productsData);

    const { categoryId } = useParams();

    useEffect(() => {
        dispatch(fetchProductsByCategoryId(categoryId))
    }, [categoryId])

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }

    return (
        <div className="product-list">
            {
                products && products.map(product => (
                    <div className="product-item" key={product.id}>
                        <LuShoppingBag className='icon' onClick={() => handleAddToCart(product)}/>

                        <div className="product-picture">
                            <img src={product.picture} alt="" />
                        </div>

                        <div className="product-info">
                            <h2 className='product-title'>{product.title}</h2>
                            <span className='product-price'>{product.price} ₽</span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ProductList