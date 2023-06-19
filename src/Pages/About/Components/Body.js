import React from 'react'
import { Container } from 'react-bootstrap'
import '../Components/Body.css'
import '../animate.css'

const Body = () => {
  return (
    <Container fluid className="col-lg-12 d-flex flex-column align-items-center mt-3 about-body-container">
        <h1 className="about-body-h1-text animated-delay-one">Who Am I?</h1>
        <Container fluid className="col-lg-12 d-flex flex-column align-items-center mt-3 text-center animated-delay-two" style={{fontFamily: "Inconsolata"}}>
            <p className='fs-5 mt-3 mb-3'>I am a front-end developer and recent computer science graduate from California State University, East Bay based in Sunnyvale, California.</p>
            <p className='fs-5 mt-3 mb-3'>I have experience building websites and web applications through personal and academic projects that you can find on my portfolio page.</p>
        </Container>

        <Container fluid className="col-lg-11 d-flex flex-column flex-xl-row justify-content-evenly mt-3 pt-3 pb-3 text-dark about-body-unordered-list-container animated-delay-three">
            <ul className="text-center about-me-unordered-list animated-delay-three">
                <h2>I am experienced in : </h2>
                <li className="fs-5">HTML</li>
                <li className="fs-5">CSS</li>
                <li className="fs-5">Javascript</li>
                <li className="fs-5">React.js</li>
                <li className="fs-5">Bootstrap</li>
                <li className="fs-5">Styled Components</li>
            </ul>

            <ul className="text-center about-me-unordered-list animated-delay-four">
                <h2>I have previous knowledge in : </h2>
                <li className="fs-5">C++</li>
                <li className="fs-5">Java</li>
                <li className="fs-5">JSP/Servlets</li>
                <li className="fs-5">Git/Github</li>
            </ul>

            <ul className="text-center about-me-unordered-list animated-delay-five">
                <h2>I have basic knowledge in : </h2>
                <li className="fs-5">Node.js</li>
                <li className="fs-5">Express.js</li>
                <li className="fs-5">MongoDB</li>
                <li className="fs-5">Python</li>
            </ul>
        </Container>
    </Container>
  )
}

export default Body