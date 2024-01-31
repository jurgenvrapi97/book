import { Card } from 'react-bootstrap'

function CardComponent(props) {
  return (
    <Card className="mt-3">
      <Card.Img style={{ height: '400px' }} variant="top" src={props.img} />
      <Card.Body style={{ height: '200px' }}>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>Categoria: {props.category}</Card.Text>
        <Card.Text>Prezzo: {props.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CardComponent
