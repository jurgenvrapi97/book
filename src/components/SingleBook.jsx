import { Card } from 'react-bootstrap'
import React, { Component } from 'react'

class SingleBook extends Component {
  state = {
    clicked: false,
  }

  handleClick = () => {
    console.log('funziona')
    this.setState({ clicked: !this.state.clicked })
  }

  render() {
    const cardClass = this.state.clicked ? 'border border-danger' : ''

    return (
      <Card className={`mt-3 ${cardClass}`} onClick={this.handleClick}>
        <Card.Img
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
