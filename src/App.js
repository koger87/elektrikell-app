import { useState } from 'react';
import './App.scss';
import Container from 'react-bootstrap/Container';
// import PriceElement from './Header/PriceElement';
import PriceHeader from './Header/PriceHeader';
  // import Badge from 'react-bootstrap/Badge';
  // import PriceLiteralElement from './Header/PriceLiteralElement';
import FooterLowPrice from './Footer/FooterLowPrice';
import FooterHighPrice from './Footer/FooterHighPrice';
import NavBar from './Header/NavBar';
// import ErrorModal from './ErrorModal';
import Body from './Body/Body';
// import Loading from './Loading';

function App() {
  const [activePrice, setActivePrice] = useState('low');
  
  // if(true) return <Loading />;
// if(true) return <ErrorModal handleClose={() => {}} errorMessage="Oshibka dostupa" />;
  
return (
    <>
    <div className="container-wraper pb-2">
    <Container>
      <NavBar />
      <PriceHeader activePrice={activePrice} setActivePrice={setActivePrice} />
     <Body/>
      </Container>
      </div>
      {activePrice === 'low' ? <FooterLowPrice /> : <FooterHighPrice />}
      </>
  );
}

export default App;
