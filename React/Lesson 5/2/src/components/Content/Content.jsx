import React from 'react'
import Section from './components/Section/Section'
import "./Content.scss"

const Content = () => {
  return (
    <div className="content">
        <Section title={"title 1"}/>
        <Section title={"title 2"}/>
        <Section title={"title 3"}/>
        <Section title={"title 4"}/>
        <Section title={"title 5"}/>
    </div>
  )
}

export default Content