import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import SelectPriceType from './SelectPriceType';

function PriceHeader(props) {
  return (
    
    <Container>
      <Row>
      <Col>Elektri hind hetkel on</Col>
      </Row>
      <Row className="mb-2">
        <Col>kõrge</Col>
        <Col>
        <SelectPriceType {...props}/>
        </Col>
        <Col>3 of 3</Col>
      </Row>
      </Container>
  );
}

export default PriceHeader