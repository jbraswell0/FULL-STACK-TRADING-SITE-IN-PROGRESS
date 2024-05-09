import React from 'react'
import { Card } from "react-bootstrap"
import { Link } from 'react-router-dom';

{/* This is a component that will display the card image 
once we have cards in the database */}

const Card = ({ card }) => {
  return (
    <Card className="my-3 p-3 rounded">
        <Link to={`/card/${card._id}`}>
            <Card.Img src={card.image} variant="top" />
        </Link>

        <Card.Body>
            <Link to={`/card/${card._id}`}>
                <Card.Title as="div">
                    <strong>{card.name}</strong>
                </Card.Title>
            </Link>
        </Card.Body>
    </Card>
  )
}

export default Card