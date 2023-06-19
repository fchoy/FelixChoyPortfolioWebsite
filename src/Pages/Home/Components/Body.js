import React from 'react'
import '../Components/Body.css'
import { Container, Image } from 'react-bootstrap'
import Photo from '../Images/about-img.png'

const Body = () => {
  return (
    <Container fluid className="d-flex flex-lg-row flex-sm-column flex-column-reverse justify-content-center home-body-container mt-md-5 mt-0">
        <Container className="d-flex flex-column justify-content-center col-lg-6 col-auto text-center body-left-container h-auto">
            <h1 className="mb-5">Hi I'm Felix.</h1>
            <h5 className="mb-5">I am a front-end developer currently seeking entry level positions or freelance work.</h5>
            <p className="mb-5 fs-5">I like to build websites in my free time. Please check out my portfolio!</p>
            <div className="w-auto mb-5" style={{display : 'inline-block'}}>
              <a href='https://www.linkedin.com/in/felixchoy/' target='_blank' rel='noreferrer'><i class="bi bi-linkedin me-5" style={{fontSize: "3rem"}}/></a>
              <a href='https://github.com/fchoy' target='_blank' rel='noreferrer' className="text-dark github-image"><i class="bi bi-github" style={{fontSize: "3rem"}}/></a>
            </div>
        </Container>
        <Container fluid className="col-lg-6 col-auto d-flex justify-content-center align-items-center body-right-container mb-5 mb-md-0">
            <Image src={Photo} className="body-right-container-image col-md-11 col-lg-12"/>
        </Container>
    </Container>
  )
}

export default Body