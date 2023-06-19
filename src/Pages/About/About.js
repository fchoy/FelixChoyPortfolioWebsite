import React, { useEffect } from 'react'
import Header from '../Home/Components/Header'
import Body from './Components/Body'

const About = () => {

  useEffect(() => {
    document.title = "Felix Choy's Portfolio Website | About"
  }, []);

  return (
    <>
        <Header/>
        <Body/>
    </>
  )
}

export default About