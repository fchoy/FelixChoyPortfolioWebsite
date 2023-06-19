import React, { useEffect } from 'react'
import Header from '../Home/Components/Header'
import Body from './Components/Body'

const Contact = () => {

  useEffect(() => {
    document.title = "Felix Choy's Portfolio Website | Contact"
  }, []); 

  return (
    <>
        <Header/>
        <Body/>
    </>
  )
}

export default Contact