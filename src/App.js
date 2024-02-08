import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import NavBook from './components/NavComponent'
import BookList from './components/BookList'
import AdditionalContentExample from './components/AllertComponent'
import FooterComponent from './components/FooterComponent'
import CommentArea from './components/CommentArea'
import { Container, Col, Row } from 'react-bootstrap'
import { useState } from 'react'

function App() {
  const [selectedBook, setSelectedBook] = useState(null)

  const handleClick = (book) => {
    setSelectedBook(book)
    console.log(book)
  }

  return (
    <>
      <div className="App">
        <header>
          {' '}
          <AdditionalContentExample />
          <NavBook />
        </header>
        <main>
          <Container>
            <Row>
              <Col className="col-9">
                <BookList
                  handleClick={handleClick}
                  selectedBook={selectedBook}
                />
              </Col>
              <Col className="col-3 my-5">
                <CommentArea book={selectedBook} />
              </Col>
            </Row>
          </Container>
        </main>
        <footer>
          <FooterComponent />
        </footer>
      </div>
    </>
  )
}

export default App
