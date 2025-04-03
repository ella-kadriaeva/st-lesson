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
import { Route, Routes } from 'react-router'
import Cart from './components/Cart/Cart'
import { fetchCategories, fetchProducts } from './store/api/product'
import { initDataFromLocalStorage } from './store/features/cart/cartSlice'

const App = () => {
  const dispatch = useDispatch();

  const categories = useSelector(state => state.products.categoriesData);

  const [isToggleModal, setIsToggleModal] = useState(false);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
    dispatch(initDataFromLocalStorage());
  }, [])

  const handleChangeToggleModal = () => {
    setIsToggleModal(!isToggleModal)
  }
  // https://www.figma.com/design/lyp7sDtR8CRK4rMDGoaxYE/Untitled?node-id=1-318&t=KMxwLG1LR9ux0dm9-1
  return (
    <>
      <Header toggleModal={handleChangeToggleModal} />

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
                <Route path='/' element={<h1>This is My Shop</h1>} />
                <Route path='/category/:categoryId' element={<ProductList />} />
              </Routes>
            </ContentBody>
          </Content>
        </div>
      </main>

      {
        isToggleModal && (
          <div className="modal">
            <div className="content">
                <Cart toggleModal={handleChangeToggleModal}/>
            </div>
          </div>
        )
      }

    </>
  )
}

export default App