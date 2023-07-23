import React from 'react'
import { Container } from 'react-bootstrap'
import '../Components/Body.css'
import '../animate.css'

const experiencedIn = ['HTML', 'CSS', 'Javascript', 'React.js', 'Bootstrap', 'Styled Components', 'TailwindCSS', 'Next.js'];
const prevKnowledge = ['C++', 'Java', 'JSP/Servlets', 'Git/Github', 'MySQL'];
const basicKnowledge = ['Node.js', 'Express.js', 'MongoDB', 'Python'];

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
                {
                    experiencedIn.map((item) => {
                        return <li className="fs-5">{item}</li>
                    })
                }
            </ul>

            <ul className="text-center about-me-unordered-list animated-delay-four">
                <h2>I have previously worked with : </h2>
                {
                    prevKnowledge.map((item) => {
                        return <li className="fs-5">{item}</li>
                    })
                }
            </ul>

            <ul className="text-center about-me-unordered-list animated-delay-five">
                <h2>I have basic knowledge in : </h2>
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