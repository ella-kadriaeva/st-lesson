import React from 'react'
import "./Content.scss"

const Content = ({children}) => {
  return (
    <section className='content'>
        {children}
    </section>
  )
}

export default Content


