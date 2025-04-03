import React from 'react'
import { LuShoppingBag } from 'react-icons/lu'

const App = () => {
  return (
    <>
      <header className='header'>
          <div className="container">
            <ul>
              <li><a href="">TestList</a></li>
              <li>
                <div className='count'>
                    <LuShoppingBag className='icon'/>
                    <span>3</span>
                </div>
              </li>
            </ul>
          </div>
      </header>

      <main>
          <div className="container">
              <aside className='aside'>
                  <h2 className='aside__title'>Каталог</h2>
                  <nav className='navbar'>
                    <ul className='navbar-list'>
                      <li><a href="" className='navbar__item navbar__item-active'>Рюкзаки</a></li>
                      <li><a href="" className='navbar__item'>Футболки</a></li>
                      <li><a href="" className='navbar__item'>Рубашки</a></li>
                    </ul>
                  </nav>
              </aside>
              <section className='content'>
                  <div className="content__header">
                      <div className="filter">
                          <div className='filter__label'>Сортировать по: <span>цене</span></div>

                          <div className="filter__dropdown">
                              <ul>
                                <li>По цене</li>
                                <li>По популярности</li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <div className="content__body">
                      <div className="product-list">
                            <div className="product-item">
                                <LuShoppingBag className='icon'/>

                                <div className="product-picture">
                                    {/* <img src="https://shorturl.at/IhQ8i" alt="" /> */}
                                </div>

                                <div className="product-info">
                                  <h2 className='product-title'>Рюкзак Louis Vuitton Discovery</h2>
                                  <span className='product-price'>150 000 ₽</span>
                                </div>
                            </div>
                      </div>
                  </div>
              </section>
          </div>
      </main>

    </>
  )
}

export default App