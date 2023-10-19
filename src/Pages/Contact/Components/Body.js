import React from 'react'
import { Container } from 'react-bootstrap'
import '../animate.css'

const Body = () => {
  return (
    <Container fluid className="text-center mt-3 d-flex flex-column">
      <p className='fs-5 animated-delay-one' style={{fontFamily : "Inconsolata"}}>I am currently working as an application developer, but am willing to seek new opportunities. If you are interested, please contact me!</p>
      <a type="email" href="mailto: felixchoy97@gmail.com" className="d-flex flex-row justify-content-center align-items-center text-dark animated-delay-two" style={{textDecoration: "none"}}>
        <i className="bi bi-envelope-at-fill fs-1 me-2"/>
        <h4 className="text-center my-auto text-primary fs-3">felixchoy97@gmail.com</h4>
      </a>
    </Container>  
  )
}

export default Body