import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import HorrorBooks from '../Data/horror.json'
import HistoryBooks from '../Data/history.json'
import FantasyBooks from '../Data/fantasy.json'
import RomanceBooks from '../Data/romance.json'
import ScifiBooks from '../Data/scifi.json'
import Card from 'react-bootstrap/Card'
import React, { useState } from 'react'

function ContainerBook() {
  const [CategoriaSel, ImpostaCategoria] = useState('horror')
  const [allBooks] = useState({
    horror: HorrorBooks,
    fantasy: FantasyBooks,
    history: HistoryBooks,
    romance: RomanceBooks,
    scifi: ScifiBooks,
  })

  const Activecat = (event) => {
    ImpostaCategoria(event.target.value)
  }

  const booksfilter = allBooks[CategoriaSel]

  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <h1 className="text-light my-5">Seleziona una categoria:</h1>
          <select
            className="btn btn-info"
            style={{ width: '200px' }}
            id="categorySelect"
            value={CategoriaSel}
            onChange={Activecat}
          >
            <option value="horror">Horror</option>
            <option value="fantasy">Fantasy</option>
            <option value="romance">Romance</option>
            <option value="history">History</option>
            <option value="scifi">Scifi</option>
          </select>
          <h1 className="my-5 text-light">
            Risultati combacianti: {booksfilter.length}
          </h1>
        </Row>
        <Row lg={4} gap={3}>
          {booksfilter.map((book) => (
            <Col key={book.asin}>
              <Card className="mt-3">
                <Card.Img
                  style={{ height: '400px' }}
                  variant="top"
                  src={book.img}
                />
                <Card.Body className="p-0" style={{ height: '200px' }}>
                  <Card.Text className="d-flex flex-column justify-content-around h-100">
                    <p className="fs-5">
                      {' '}
                      <span>Categoria: </span>
                      {book.category}
                    </p>
                    <p className="fs-3">{book.title}</p>
                    <p className="fw-bold text-primary-emphasis">
                      <span>Prezzo: </span>
                      {book.price} €
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}

export default ContainerBook
