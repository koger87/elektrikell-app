import { useEffect, useState } from 'react';
import './App.scss';
import Container from 'react-bootstrap/Container';
import Body from './Body/Body';
import NavBar from './Header/NavBar';
import PriceHeader from './Header/PriceHeader';
import FooterLowPrice from './Footer/FooterLowPrice';
import FooterHighPrice from './Footer/FooterHighPrice';
import ErrorModal from './ErrorModal';
import Loading from './Loading';
import { useParams } from 'react-router-dom';

function ElektriKell() {

  const params = useParams();

  const [activePrice, setActivePrice] = useState('low');

  useEffect(() => {
    params.activePrice && setActivePrice(params.activePrice)
  }, [params]);

  return (
    <>
      <div className="container-wrapper pb-2">
        <Container className='text-center'>
          <NavBar />
          <PriceHeader
            activePrice={activePrice}
            setActivePrice={setActivePrice} />
          <Body
            activePrice={activePrice} />
        </Container>
      </div>
      {activePrice === 'low'
        ?
        <FooterLowPrice />
        :
        <FooterHighPrice />}
      <Loading />
      <ErrorModal />
    </>
  );
}

export default ElektriKell;
