import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import NavBook from './components/NavComponent'
import BookList from './components/BookList'
import AdditionalContentExample from './components/AllertComponent'
import FooterComponent from './components/FooterComponent'
import CommentArea from './components/CommentArea'
import { Container, Col, Row } from 'react-bootstrap'
import { Component } from 'react'
import StickyBox from 'react-sticky-box'

class App extends Component {
  state = {
    selectedBook: null,
  }

  handleClick = (book) => {
    this.setState({ selectedBook: book })
    console.log(book)
  }

  render() {
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
                    handleClick={this.handleClick}
                    selectedBook={this.state.selectedBook}
                  />
                </Col>
                <Col className="col-3 my-5">
                  <StickyBox offsetTop={20} offsetBottom={20}>
                    <CommentArea book={this.state.selectedBook} />
                  </StickyBox>
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
}

export default App
