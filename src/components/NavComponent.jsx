import Nav from 'react-bootstrap/Nav'

function NavBook() {
  return (
    <Nav variant="tabs" className="bg-body-dark" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link className="text-light" href="#">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="text-light" eventKey="#">
          About
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="text-light" eventKey="#">
          Browse
        </Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default NavBook
