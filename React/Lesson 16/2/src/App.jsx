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
import { initCategories, initData } from './store/features/products/productSlice'
import { Route, Routes } from 'react-router'

const categoriesData = [
  {
    id: "all",
    title: "Все",
    slug: "all"
  },
  {
    id: "1",
    title: "Рюкзаки",
    slug: "bag"
  },
  {
    id: "2",
    title: "Футболки",
    slug: "t-shirt"
  },
  {
    id: "3",
    title: "Рубашки",
    slug: "shirt"
  }
]

const productsData = [
  {
    id: 1,
    title: "Рюкзак Louis Vuitton Discovery",
    price: 150000,
    picture: "https://shorturl.at/IhQ8i",
    categoryId: "1"
  },
  {
    id: 2,
    title: "Рюкзак Louis Vuitton Discovery",
    price: 10000,
    picture: "https://shorturl.at/IhQ8i",
    categoryId: "1"
  },
  {
    id: 3,
    title: "Рюкзак Louis Vuitton Discovery",
    price: 88000,
    picture: "https://shorturl.at/IhQ8i",
    categoryId: "1"
  },
  {
    id: 4,
    title: "Рюкзак Louis Vuitton Discovery",
    price: 1500,
    picture: "https://shorturl.at/IhQ8i",
    categoryId: "1"
  },

  {
    id: 5,
    title: "Футболка с узором Monogram",
    price: 150000,
    picture: "https://shorturl.at/tnteU",
    categoryId: "2"
  },
  {
    id: 6,
    title: "Футболка с узором Monogram",
    price: 10000,
    picture: "https://shorturl.at/tnteU",
    categoryId: "2"
  },
  {
    id: 7,
    title: "Футболка с узором Monogram",
    price: 88000,
    picture: "https://shorturl.at/tnteU",
    categoryId: "2"
  },
  {
    id: 8,
    title: "Футболка с узором Monogram",
    price: 1500,
    picture: "https://shorturl.at/tnteU",
    categoryId: "2"
  },

  {
    id: 9,
    title: "Шёлковая рубашка с отделкой бисером",
    price: 1500,
    picture: "https://shorturl.at/ndSEi",
    categoryId: "3"
  },
  {
    id: 10,
    title: "Шёлковая рубашка с отделкой бисером",
    price: 4000,
    picture: "https://shorturl.at/ndSEi",
    categoryId: "3"
  },
  {
    id: 11,
    title: "Шёлковая рубашка с отделкой бисером",
    price: 3500,
    picture: "https://shorturl.at/ndSEi",
    categoryId: "3"
  },
]


const App = () => {
  const dispatch = useDispatch();

  const categories = useSelector(state => state.products.categoriesData);

  useEffect(() => {
    dispatch(initCategories(categoriesData));
    dispatch(initData(productsData));
  }, [])

  return (
    <>
      <Header />

      <main>
        <div className="container">
          <Aside>
            <Navbar categories={categories} />
          </Aside>

          <Content>
            <ContentHeader>
              <Filter />
            </ContentHeader>

            <ContentBody>
                <Routes>
                  <Route path='/category/:categoryId' element={<ProductList />}/>
                </Routes>
            </ContentBody>
          </Content>
        </div>
      </main>

    </>
  )
}

export default App