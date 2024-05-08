import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    const currentYear = new Date().getFullYear() //Get Current Year
  return (
    <footer>
        <Container>
            <Row>
                <Col className='text-center py-3'>
                    <p>SITE NAME &copy; {currentYear}</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer