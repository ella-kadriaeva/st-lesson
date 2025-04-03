import React from 'react'
import "./Aside.scss"

const Aside = ({children}) => {
  return (
    <aside className='aside'>
        <h2 className='aside__title'>Каталог</h2>

        {children}
    </aside>
  )
}

export default Aside