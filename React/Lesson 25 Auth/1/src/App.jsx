import React, { useEffect, useRef, useState } from 'react'
import { Route, Routes } from 'react-router';
import Header from '@/components/Header/Header'
import Home from '@/Pages/Home/Home';
import Cart from '@/components/Cart/Cart';
import ProductList from '@/components/ProductList/ProductList';
import { fetchCategories, fetchProducts } from '@/store/api/product';
import { initDataFromLocalStorage } from '@/store/features/cart/cartSlice';
import { useDispatch } from 'react-redux';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';

const App = () => {
  const dispatch = useDispatch();

  const modalRef = useRef(null);
  
  const [isToggleModal, setIsToggleModal] = useState(false);

  const handleChangeToggleModal = () => {
    setIsToggleModal(!isToggleModal)
  }

  const handleClickOutside = (e) => {
    if (modalRef.current && modalRef.current === e.target) {
      setIsToggleModal(false)
    }
  }

    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchProducts());
        dispatch(initDataFromLocalStorage());
    }, [])


  return (
    <>
      <Header toggleModal={handleChangeToggleModal} />

      <Routes>
        <Route path='/' element={<Home />}>
            <Route index element={<h1>This is My Shop</h1>} />
            <Route path='/category/:categoryId' element={<ProductList />}/>
        </Route>
        <Route path='/signin' element={<SignIn />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='*' element={<h1>Page is not Found!</h1>}/>
      </Routes>


      {
        isToggleModal && (
          <div className="modal" ref={modalRef} onClick={handleClickOutside}>
            <div className="content">
              <Cart toggleModal={handleChangeToggleModal} />
            </div>
          </div>
        )
      }

    </>
  )
}

export default App