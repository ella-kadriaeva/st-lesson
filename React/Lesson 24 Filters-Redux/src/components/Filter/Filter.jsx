import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { checkSale, selectFilter, changeSearchValue, changePriceFilter } from '@/store/features/products/productSlice'
import Sort from '@/components/Sort/Sort'

const Filter = () => {
    const dispatch = useDispatch()

    const {saleChecked, searchValue, priceFilter} = useSelector(state => state.products);

    useEffect(() => {
        let getLocalFilter = localStorage.getItem('selectedFilter');
        let saleCheck = localStorage.getItem('saleChecked');

        if (getLocalFilter) {
            dispatch(selectFilter(JSON.parse(getLocalFilter)));
        }

        if (saleCheck) {
            dispatch(checkSale(JSON.parse(saleCheck)));
        }

    }, [])

    const hanldeCheckSale = (e) => {
        dispatch(checkSale(e.target.checked))
    }

    const handleChangeSearch = (e) => {
        dispatch(changeSearchValue(e.target.value))
    }

    const handleChangePrice = (e) => {
        dispatch(changePriceFilter({
            name: e.target.name,
            value: e.target.value
        }))
    }



    return (
        <div className="filters">

            <div className='filters-left'>
                <div className='filter-sale'>
                    <label htmlFor="">
                        Sale: <input type="checkbox" onChange={hanldeCheckSale} checked={saleChecked} />
                    </label>
                </div>

                <div className="filter-search">
                    <input type="text" value={searchValue} className='filter-input' onChange={handleChangeSearch} placeholder='Search ...' />
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
            <Sort />
        </div>
    )
}

export default Filter