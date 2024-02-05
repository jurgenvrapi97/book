import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

class AddComment extends Component {
  state = {
    comment: '',
    rate: '',
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const data = {
      comment: this.state.comment,
      rate: this.state.rate,
      elementId: this.props.idRec,
    }
    console.log(data)
    fetch('https://striveschool-api.herokuapp.com/api/comments/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiOTY3OTViMjYxNTAwMTk4YTY5MzkiLCJpYXQiOjE3MDY3OTI1NjksImV4cCI6MTcwODAwMjE2OX0.2Kcnmg6dO93u-YQ9-ga8gq5gU0Q-eegXZz0z_7tG1XU',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          alert('hai aggiunto il commento')
          this.setState = {
            comment: '',
            rate: '',
          }
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <>
        <div id="stick">
          <h2 className="text-light mb-4">Aggiungi un commento</h2>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label className="text-light">Commento</Form.Label>
              <Form.Control
                placeholder="Inserisci il tuo commento"
                as="textarea"
                name="comment"
                onChange={this.handleChange}
                className="mb-3"
              />
              <Form.Label className="text-light">Valutazione</Form.Label>
              <Form.Control
                id="rate"
                as="select"
                name="rate"
                onChange={this.handleChange}
                className="mb-3"
              >
                <option value="">Seleziona voto...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Form.Control>
            </Form.Group>
            <Button type="submit" variant="primary">
              Aggiungi
            </Button>
          </Form>
        </div>
      </>
    )
  }
}

export default AddComment
