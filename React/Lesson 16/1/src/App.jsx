import React, { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import Aside from './components/Aside/Aside'
import Navbar from './components/Navbar/Navbar'
import ProductList from './components/ProductList/ProductList'
import Content from './components/Content/Content'
import ContentBody from './components/Content/components/ContentBody/ContentBody'
import ContentHeader from './components/Content/components/ContentHeader/ContentHeader'
import Filter from './components/Filter/Filter'
import { useDispatch, useSelector } from 'react-redux'
import { initCategories } from './store/features/products/productSlice'

const categoriesData = [
  {
    id: "1",
    title: "Рюкзаки"
  },
  {
    id: "2",
    title: "Футболки"
  },
  {
    id: "3",
    title: "Рубашки"
  }
]

const productsData = [
  {
    id: 1,
    title: "Рюкзак Louis Vuitton Discovery",
    price: 150000,
    picture: "https://shorturl.at/IhQ8i",
    categoryid: "1"
  },
  {
    id: 2,
    title: "Рюкзак Louis Vuitton Discovery",
    price: 10000,
    picture: "https://shorturl.at/IhQ8i",
    categoryid: "1"
  },
  {
    id: 3,
    title: "Рюкзак Louis Vuitton Discovery",
    price: 88000,
    picture: "https://shorturl.at/IhQ8i",
    categoryid: "1"
  },
  {
    id: 4,
    title: "Рюкзак Louis Vuitton Discovery",
    price: 1500,
    picture: "https://shorturl.at/IhQ8i",
    categoryid: "1"
  },

  {
    id: 5,
    title: "Рюкзак Louis Vuitton Discovery",
    price: 150000,
    picture: "https://shorturl.at/tnteU",
    categoryid: "2"
  },
  {
    id: 6,
    title: "Рюкзак Louis Vuitton Discovery",
    price: 10000,
    picture: "https://shorturl.at/tnteU",
    categoryid: "2"
  },
  {
    id: 7,
    title: "Рюкзак Louis Vuitton Discovery",
    price: 88000,
    picture: "https://shorturl.at/tnteU",
    categoryid: "2"
  },
  {
    id: 8,
    title: "Рюкзак Louis Vuitton Discovery",
    price: 1500,
    picture: "https://shorturl.at/tnteU",
    categoryid: "2"
  },
]


const App = () => {
  const dispatch = useDispatch();

  const categories = useSelector(state => state.products.categoriesData);

  useEffect(()=>{
    dispatch(initCategories(categoriesData));
  },[])

  return (
    <>
      <Header />
      
      <main>
          <div className="container">
            <Aside>
              <Navbar categories={categories}/>
            </Aside>

             <Content>
                <ContentHeader>
                    <Filter />
                </ContentHeader>

                <ContentBody>
                  <ProductList />
                </ContentBody>
             </Content>
          </div>
      </main>

    </>
  )
}

export default App