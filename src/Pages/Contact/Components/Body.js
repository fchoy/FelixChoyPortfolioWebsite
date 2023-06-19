import React from 'react'
import { Container } from 'react-bootstrap'

const Body = () => {
  return (
    <Container fluid className="text-center mt-3 d-flex flex-column">
      <p className='fs-5'>I am currently seeking an entry level web developer position or freelance work. If you are interested, please contact me!</p>
      <a type="email" href="mailto: felixchoy97@gmail.com" className="d-flex flex-row justify-content-center align-items-center text-dark" style={{textDecoration: "none"}}>
        <i className="bi bi-envelope-at-fill fs-1 me-2"/>
        <h4 className="text-center my-auto text-primary fs-3">felixchoy97@gmail.com</h4>
      </a>
    </Container>  
  )
}

export default Body