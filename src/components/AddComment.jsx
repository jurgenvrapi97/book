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
        <h2>Aggiungi un commento</h2>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>
              Commento
              <Form.Control
                placeholder="es.carino..."
                type="text"
                name="comment"
                onChange={this.handleChange}
              />
            </Form.Label>
            <Form.Label>
              Valutazione
              <Form.Control
                placeholder="Da 1 a 5"
                type="text"
                name="rate"
                onChange={this.handleChange}
              />
            </Form.Label>
          </Form.Group>
          <Button type="submit">Add</Button>
        </Form>
      </>
    )
  }
}

export default AddComment
