import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import HorrorBooks from '../Data/horror.json'
import HistoryBooks from '../Data/history.json'
import FantasyBooks from '../Data/fantasy.json'
import RomanceBooks from '../Data/romance.json'
import ScifiBooks from '../Data/scifi.json'

import React, { Component } from 'react'
import CardComponent from './SingleBook'

class BookList extends Component {
  state = {
    CategoriaSel: 'horror',
    allBooks: {
      horror: HorrorBooks,
      fantasy: FantasyBooks,
      history: HistoryBooks,
      romance: RomanceBooks,
      scifi: ScifiBooks,
    },
    bookSearched: '',
    currentPage: 1,
  }

  Selected = (event) => {
    this.setState({ CategoriaSel: event.target.value })
  }

  SearchBook = (event) => {
    this.setState({ bookSearched: event.target.value })
  }

  render() {
    const booksFilter = this.state.allBooks[this.state.CategoriaSel].filter(
      (book) =>
        book.title
          .toLowerCase()
          .includes(this.state.bookSearched.toLocaleLowerCase())
    )
    const startIndex = (this.state.currentPage - 1) * 20
    console.log(startIndex)
    const endIndex = startIndex + 20
    console.log(endIndex)
    const booksToShow = booksFilter.slice(startIndex, endIndex)

    return (
      <>
        <Container>
          <Row className="justify-content-center ">
            <h1 className="text-light my-5">Seleziona una categoria:</h1>
            <Row className="align-items-center justify-content-center">
              <Col className="col-3">
                <select
                  className="btn btn-info"
                  style={{ width: '200px' }}
                  id="categorySelect"
                  value={this.state.CategoriaSel}
                  onChange={this.Selected}
                >
                  <option value="horror">Horror</option>
                  <option value="fantasy">Fantasy</option>
                  <option value="romance">Romance</option>
                  <option value="history">History</option>
                  <option value="scifi">Scifi</option>
                </select>
              </Col>
              <Col className="col-4">
                <input
                  type="text"
                  placeholder="Cerca libri..."
                  className="form-control my-3"
                  onChange={this.SearchBook}
                />
              </Col>
            </Row>
            <h1 className="my-5 text-light">
              Risultati combacianti: {booksFilter.length}{' '}
            </h1>
          </Row>
          <Row lg={4} sm={2} gap={3}>
            {booksToShow.map((book) => (
              <Col key={book.asin} className="mb-3">
                <CardComponent
                  title={book.title}
                  category={book.category}
                  img={book.img}
                  price={book.price}
                />
              </Col>
            ))}
          </Row>
          <Row className="justify-content-center">
            <Col>
              <button
                className="btn btn-info mx-2"
                onClick={() => {
                  this.setState({ currentPage: this.state.currentPage - 1 })
                }}
                disabled={this.state.currentPage === 1}
              >
                Pagina precedente
              </button>
              <button
                className="btn btn-info mx-2"
                onClick={() => {
                  this.setState({ currentPage: this.state.currentPage + 1 })
                }}
                disabled={endIndex >= booksFilter.length}
              >
                Pagina successiva
              </button>
            </Col>
          </Row>
        </Container>{' '}
      </>
    )
  }
}

export default BookList
