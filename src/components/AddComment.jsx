import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function AddComment(props) {
  const [comment, setComment] = useState('')
  const [rate, setRate] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = {
      comment: comment,
      rate: rate,
      elementId: props.idRec,
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
          setComment('')
          setRate('')
          alert('hai aggiunto il commento')
          props.setComments((comments) => [...comments, data])
          console.log('è stato effettivamente creato')
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    if (name === 'comment') {
      setComment(value)
    } else if (name === 'rate') {
      setRate(value)
    }
  }

  return (
    <>
      <div>
        <h2 className="text-light mb-4">Aggiungi un commento</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label className="text-light">Commento</Form.Label>
            <Form.Control
              placeholder="Inserisci il tuo commento"
              as="textarea"
              name="comment"
              onChange={handleChange}
              className="mb-3"
            />
            <Form.Label className="text-light">Valutazione</Form.Label>
            <Form.Control
              id="rate"
              as="select"
              name="rate"
              onChange={handleChange}
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

export default AddComment
