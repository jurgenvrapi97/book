import Alert from 'react-bootstrap/Alert'
import { useState } from 'react'

function AdditionalContentExample() {
  const [show, setShow] = useState(true)
  if (show) {
    return (
      <Alert variant="success" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>
          Benvenuti nel miglio e-commerce di libri in Itali
        </Alert.Heading>
        <p>
          Seleziona una categoria da quelle proposte la nostra è SPAVENTOSA!!
        </p>
      </Alert>
    )
  }
}

export default AdditionalContentExample
