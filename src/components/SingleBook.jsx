import { Card } from 'react-bootstrap'
import React, { Component } from 'react'

class SingleBook extends Component {
  render() {
    const cardClass =
      this.props.selectedBook === this.props.idBook
        ? 'border border-5 border-danger'
        : ''
    return (
      <Card className={`mt-3 ${cardClass}`}>
        <Card.Img
          onClick={() => this.props.handleClick(this.props.idBook)}
          style={{ height: '400px' }}
          variant="top"
          src={this.props.img}
        />
        <Card.Body style={{ height: '200px' }}>
          <Card.Title>{this.props.title}</Card.Title>

          <Card.Text>Categoria: {this.props.category}</Card.Text>
          <Card.Text>Prezzo: {this.props.price}</Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default SingleBook
