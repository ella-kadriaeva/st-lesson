import React, { useEffect, useState } from 'react'
import Aside from '@/components/Aside/Aside'
import Navbar from '@/components/Navbar/Navbar'
import Content from '@/components/Content/Content'
import ContentBody from '@/components/Content/components/ContentBody/ContentBody'
import ContentHeader from '@/components/Content/components/ContentHeader/ContentHeader'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet} from 'react-router'
import { fetchCategories, fetchProducts } from '@/store/api/product'
import { initDataFromLocalStorage } from '@/store/features/cart/cartSlice'
import Filter from '@/components/Filter/Filter'


const Home = () => {
    const categories = useSelector(state => state.products.categoriesData);

    return (
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
                        <Outlet />
                    </ContentBody>
                </Content>
            </div>
        </main>
    )
}

export default Home