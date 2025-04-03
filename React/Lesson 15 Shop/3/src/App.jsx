import React from 'react'
import Header from './components/Header/Header'
import Aside from './components/Aside/Aside'
import Navbar from './components/Navbar/Navbar'
import ProductList from './components/ProductList/ProductList'
import Content from './components/Content/Content'
import ContentBody from './components/Content/components/ContentBody/ContentBody'
import ContentHeader from './components/Content/components/ContentHeader/ContentHeader'
import Filter from './components/Filter/Filter'

const App = () => {
  return (
    <>
      <Header />
      

      <main>
          <div className="container">
            <Aside>
              <Navbar />
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