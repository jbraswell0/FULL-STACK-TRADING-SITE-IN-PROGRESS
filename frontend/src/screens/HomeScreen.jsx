import React from 'react'
import { Row, Col } from 'react-bootstrap';

const HomeScreen = () => {
  return (
    <>
        <h1>Whats Popular</h1>
        <Row>
            {/* Function that displays cards from database will go here.
            ie: cards.map((card) => ( 
            <Col key={card._id} sm={12} md={6} lg={4} xl={3}>
                <Card card={card} />
            </Col>
            )) } */}
        </Row>
    </>
  )
}

export default HomeScreen