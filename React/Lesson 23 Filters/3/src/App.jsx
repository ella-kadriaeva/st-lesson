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

  const [saleChecked, setSaleChecked] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const [priceFilter, setPriceFilter] = useState({
    minPrice: 0,
    maxPrice: 99999999
  })


  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
    dispatch(initDataFromLocalStorage());

    let getLocalFilter = localStorage.getItem('selectedFilter');
    let saleCheck = localStorage.getItem('saleChecked');

    if (getLocalFilter) {
      setSelectedFilter(JSON.parse(getLocalFilter))
    }

    if (saleCheck) {
      setSaleChecked(JSON.parse(saleCheck))
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

  const hanldeCheckSale = (e) => {
    setSaleChecked(e.target.checked);

    localStorage.setItem("saleChecked", JSON.stringify(e.target.checked))
  }

  const handleChangeSearch = (e) => {
    setSearchValue(e.target.value);
  }

  const handleChangePrice = (e) =>{
    setPriceFilter(prevState => ({...prevState, [e.target.name]: e.target.value}))
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
              <div className="filters">

                <div className='filters-left'>
                  <div className='filter-sale'>
                    <label htmlFor="">
                      Sale: <input type="checkbox" onChange={hanldeCheckSale} checked={saleChecked} />
                    </label>
                  </div>

                  <div className="filter-search">
                    <input type="text" className='filter-input' onChange={handleChangeSearch} placeholder='Search ...' />
                  </div>

                  <div className='filter-price'>
                    <input 
                      type="number" 
                      className='filter-input' 
                      name='minPrice' 
                      onChange={handleChangePrice} 
                      placeholder='0' 
                      min={0} 
                      value={priceFilter.minPrice}
                    />
                    <input 
                      type="number" 
                      className='filter-input' 
                      name='maxPrice' 
                      onChange={handleChangePrice} 
                      placeholder='99999999' 
                      min={0} 
                      value={priceFilter.maxPrice}
                    />
                  </div>
                </div>
                <Filter labels={filterLabels} selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
              </div>

            </ContentHeader>

            <ContentBody>
              <Routes>
                <Route path='/' element={<h1>This is My Shop</h1>} />
                <Route path='/category/:categoryId' element={<ProductList
                  selectedFilter={selectedFilter}
                  saleChecked={saleChecked}
                  searchValue={searchValue}
                  priceFilter={priceFilter}
                />} />
              </Routes>
            </ContentBody>
          </Content>
        </div>
      </main>

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