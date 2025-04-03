import React, { useEffect, useRef, useState } from 'react'
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


const filterData = [
  {
    id: 1,
    title: 'По популярности',
    value: 'popular'
  },
  {
    id: 2,
    title: 'По возрастанию',
    value: 'price_asc'
  },
  {
    id: 3,
    title: 'По убыванию',
    value: 'price_desc'
  }
]

const App = () => {
  const dispatch = useDispatch();

  const categories = useSelector(state => state.products.categoriesData);

  const modalRef = useRef(null);

  const [isToggleModal, setIsToggleModal] = useState(false);
  const [filterLabels, setFilterLabels] = useState(filterData);
  const [selectedFilter, setSelectedFilter] = useState(filterData[0]);
  
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
    dispatch(initDataFromLocalStorage());

    let getLocalFilter = localStorage.getItem('selectedFilter');

    if(getLocalFilter){
      setSelectedFilter(JSON.parse(getLocalFilter))
    }
  }, [])

  const handleChangeToggleModal = () => {
    setIsToggleModal(!isToggleModal)
  }

  const handleClickOutside = (e) => { 
    if (modalRef.current && modalRef.current === e.target) {
      setIsToggleModal(false)
    }
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
              <div className='filter-sale'>
                  <label htmlFor="">
                      Sale: <input type="checkbox" />
                  </label>
              </div>
              <Filter labels={filterLabels} selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter}/>
            </ContentHeader>

            <ContentBody>
              <Routes>
                <Route path='/' element={<h1>This is My Shop</h1>} />
                <Route path='/category/:categoryId' element={<ProductList selectedFilter={selectedFilter}/>} />
              </Routes>
            </ContentBody>
          </Content>
        </div>
      </main>

      {
        isToggleModal && (
          <div className="modal" ref={modalRef} onClick={handleClickOutside}>
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