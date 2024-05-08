import React from 'react'
import { Card } from "react-bootstrap"

{/* This is a component that will display the card image 
once we have cards in the database */}

const Card = ({ card }) => {
  return (
    <Card className="my-3 p-3 rounded">
        <a href={`/card/${card._id}`}>
            <Card.Img src={card.image} variant="top" />
        </a>

        <Card.Body>
            <a href={`/card/${card._id}`}>
                <Card.Title as="div">
                    <strong>{card.name}</strong>
                </Card.Title>
            </a>
        </Card.Body>
    </Card>
  )
}

export default Card