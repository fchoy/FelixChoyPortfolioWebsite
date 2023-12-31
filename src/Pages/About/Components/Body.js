import React from 'react'
import { Container } from 'react-bootstrap'
import '../Components/Body.css'
import '../animate.css'

const experiencedIn = ['HTML', 'CSS', 'Javascript', 'React.js', 'Bootstrap', 'Styled Components', 'TailwindCSS', 'Next.js', 'DataWeave'];
const prevKnowledge = ['C++', 'Java', 'JSP/Servlets', 'Git/Github', 'SQL'];
const basicKnowledge = ['Node.js', 'Express.js', 'MongoDB', 'Python'];

const Body = () => {
  return (
    <Container fluid className="col-lg-12 d-flex flex-column align-items-center mt-3 about-body-container">
        <h1 className="about-body-h1-text animated-delay-one">Who Am I?</h1>
        <Container fluid className="col-lg-12 d-flex flex-column align-items-center mt-3 text-center animated-delay-two" style={{fontFamily: "Inconsolata"}}>
            <p className='fs-5 mt-3 mb-3 text-primary fw-bold'>I am a software developer and computer science graduate from California State University, East Bay currently based in Fort Wayne, Indiana.</p>
            <p className='fs-5 mt-3 mb-3 fw-bold'>I am currently working as an application developer for Brotherhood Mutual Insurance.</p>
            <p className='fs-5 mt-3 mb-3 text-primary fw-bold'>I have experience building websites, and web applications using React/Next.js and have experience building APIs using the Mulesoft Anypoint Platform.</p>
        </Container>

        <Container fluid className="col-lg-11 d-flex flex-column flex-xl-row justify-content-evenly mt-3 pt-3 pb-3 text-dark about-body-unordered-list-container animated-delay-three">
            <ul className="text-center about-me-unordered-list animated-delay-three">
                <h2 className='text-decoration-underline'>I am experienced in : </h2>
                {
                    experiencedIn.map((item) => {
                        return <li className="fs-5">{item}</li>
                    })
                }
            </ul>

            <ul className="text-center about-me-unordered-list animated-delay-four">
                <h2 className='text-decoration-underline'>I have previously worked with : </h2>
                {
                    prevKnowledge.map((item) => {
                        return <li className="fs-5">{item}</li>
                    })
                }
            </ul>

            <ul className="text-center about-me-unordered-list animated-delay-five">
                <h2 className='text-decoration-underline'>I have basic knowledge in : </h2>
                {
                    basicKnowledge.map((item) => {
                        return <li className="fs-5">{item}</li>
                    })
                }
            </ul>
        </Container>
    </Container>
  )
}

export default Body