import { Card } from 'react-bootstrap'
import React from 'react'

function SingleBook(props) {
  const cardClass =
    props.selectedBook === props.idBook ? 'border border-5 border-danger' : ''
  return (
    <Card data-testid="book-img" className={`mt-3 ${cardClass}`}>
      <Card.Img
        data-testid="_img"
        onClick={() => props.handleClick(props.idBook)}
        style={{ height: '400px' }}
        variant="top"
        src={props.img}
      />
      <Card.Body style={{ height: '200px' }}>
        <Card.Title>{props.title}</Card.Title>

        <Card.Text>Categoria: {props.category}</Card.Text>
        <Card.Text>Prezzo: {props.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default SingleBook
