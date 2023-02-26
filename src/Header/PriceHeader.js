import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import SelectPriceType from './SelectPriceType';
import { getCurrentPrice } from '../services/apiService';
import ErrorModal from '../ErrorModal';


function PriceHeader(props) {

  const [currentPrice, setCurrentPrice] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    getCurrentPrice()
      .then(({ success, data, messages }) => {
        if (!success) {
          throw messages[0];
        }

        const kwPrice = +(data[0].price / 10 * 1.2).toFixed(2);

        setCurrentPrice(kwPrice)
      })
      .catch((error) => setErrorMessage(error.toString()));

  }, []);

  return (
    <>
      <Container>
        <Row>
          <Col>Elektri hind hetkel on</Col>
        </Row>
        <Row className="mb-2">
          <Col>kõrge</Col>
          <Col>
            <SelectPriceType {...props} />
          </Col>
          <Col>{currentPrice}</Col>
        </Row>
      </Container>
      <ErrorModal errorMessage={errorMessage} handleClose={() => setErrorMessage(null)} />
    </>
  );
}

export default PriceHeader;