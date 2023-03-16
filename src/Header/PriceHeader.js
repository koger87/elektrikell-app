import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import SelectPriceType from './SelectPriceType';
import { getCurrentPrice } from '../services/apiService';
import { setErrorMessage } from '../services/stateService';
import { useDispatch } from 'react-redux';


//komponenti mogut prinematj properties(property)
//Properti peredajotsa komponentu, takze kak i svosistvo Html elementu
//Properties , mogit bitj ljubqm vidom dannqx
//kazdoe properti peredannoe komponentu, sobiraetsa v 1 objekt.
//komponent prinemaet tolko 1 argument, i za4astuju, ego nazivajut - 'props'.


function PriceHeader(props) {

  const [currentPrice, setCurrentPrice] = useState(0);

  const dispatch = useDispatch();

  // useEffect - React hook (vozdeistvuet na otrisovku/render komponenta), kotorii zapuskaetsa, tolko posle togo, kak vesj komponent zakon4il otrisovku.
  // useEffect , prinemaet v sebka 2 argumenta - 
  // 1. funkcija, kotoraja zapustitsa, kogda kompponent zakon4il svoju otrisovku,
  // 2. spisok zavisimostii (massiv).
  // Spisok zavisimosti, kontroliruet zapusk funkcii 1go argumenta.
  // esli v zavisimosti, izmenilisj dannii, to UseEffect, zanogo zapuskaetsa.(naprimer vnizu [data]-pmenjalasj )
  // komponent mozet zanogo otrisovatsa, no useEffect, mozet ne zapustitsa, esli eto izminenie ego ne kasaetsa.
  // Esli peredatj pustoi massiv v zavisimosti, to useEffect otrabotaet, tolko 1 raz, posle pervoi otrisovki komponenta.
  // UseEffect, takze garantiruet, 4to esli v njom, mi budem menjatj sostojanie komponenta, to proizoidjot, tolko 1 otrisovka komponenta, 
  // i posle etoi otrisovki, useEffect, ne zapustitsa.

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
          <Col>Kõrge/Madal</Col>
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