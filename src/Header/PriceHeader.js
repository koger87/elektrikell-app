import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import SelectPriceType from './SelectPriceType';
import { getCurrentPrice } from '../services/apiService';
import { useDispatch } from 'react-redux';
import { setErrorMessage } from '../services/stateService';


function PriceHeader(props) {

  const [currentPrice, setCurrentPrice] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    getCurrentPrice()
      .then(({ success, data, messages }) => {
        if (!success) {
          throw messages[0];
        }

        const kwPrice = +(data[0].price / 10 * 1.2).toFixed(2);
        setCurrentPrice(kwPrice)
      })
      .catch((error) => dispatch(setErrorMessage(error.toString())));
  }, [dispatch]);

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
    </>
  );
}

export default PriceHeader;