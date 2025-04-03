import React, { useEffect } from 'react'
import { LuShoppingBag } from 'react-icons/lu'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { addToCart } from '@/store/features/cart/cartSlice'
import { fetchProductsByCategoryId } from '../../store/api/product'

const ProductList = ({selectedFilter}) => {
    const dispatch = useDispatch();
    const {productsData, loading} = useSelector(state => state.products);

    const { categoryId } = useParams();

    useEffect(() => {
        dispatch(fetchProductsByCategoryId(categoryId))
    }, [categoryId])

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }

    const sortProducts = (products, selectedFilter) => {
       switch (selectedFilter.value) {
              case 'popular':
                return products.sort((a, b) => b.popularity - a.popularity)
              case 'price_asc':
                return products.sort((a, b) => a.price - b.price)
              case 'price_desc':
                return products.sort((a, b) => b.price - a.price)
              default:
                return products
         }
    }

    if(loading){
        return "Loading..."
    }

    const sortedProducts = sortProducts([...productsData], selectedFilter);


    return (
        <div className="product-list">
            {
                sortedProducts && sortedProducts.map(product => (
                    <div className="product-item" key={product.id}>
                        <LuShoppingBag className='icon' onClick={() => handleAddToCart(product)}/>

                           {product.sale > 0 &&  <span className='product-sale'>{product.sale} %</span>} 
                        <div className="product-picture">
                            <img src={product.picture} alt="" />
                        </div>

                        <div className="product-info">
                            <h2 className='product-title'>{product.title}</h2>
                            <span className='product-price'>{
                                     product.sale > 0 
                                        ? <>
                                            <span>{product.salePrice} ₽</span>
                                            <span className='product-price__prev'>{product.price} ₽</span>
                                          </>
                                        : <span>{product.price} ₽</span>
                            }</span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ProductList