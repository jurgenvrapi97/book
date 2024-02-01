import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import NavBook from './components/NavComponent'
import BookList from './components/BookList'
import AdditionalContentExample from './components/AllertComponent'
import FooterComponent from './components/FooterComponent'

function App() {
  return (
    <>
      <div className="App">
        <header>
          {' '}
          <AdditionalContentExample />
          <NavBook />
        </header>
        <main>
          <BookList />
        </main>
        <footer>
          <FooterComponent />
        </footer>
      </div>
    </>
  )
}

export default App
