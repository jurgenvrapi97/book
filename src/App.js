import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBook from './components/NavComponent'
import ContainerBook from './components/BookShopComponent'
import AdditionalContentExample from './components/AllertComponent'
function App() {
  return (
    <div className="App">
      <AdditionalContentExample />
      <NavBook />
      <ContainerBook />
    </div>
  )
}

export default App
