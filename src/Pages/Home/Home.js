import React, { useEffect } from 'react'
import Header from './Components/Header'
import Body from './Components/Body'

const Home = () => {

  useEffect(() => {
    document.title = "Felix Choy's Portfolio Website | Home"
  }, []);

  return (
    <div className="h-100">
        <Header/>
        <Body/>
    </div>
  )
}

export default Home