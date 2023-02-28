import { useState } from 'react';
import './App.scss';
import Container from 'react-bootstrap/Container';
import PriceHeader from './Header/PriceHeader';
import FooterLowPrice from './Footer/FooterLowPrice';
import FooterHighPrice from './Footer/FooterHighPrice';
import NavBar from './Header/NavBar';
// import ErrorModal from './ErrorModal';
import Body from './Body/Body';
import Loading from './Loading';

function App() {
  const [activePrice, setActivePrice] = useState('low');
  const [hourRange, setHourRange] = useState(1)
  const [lowPriceTimestamp, setLowPriceTimestamp] = useState(0);


  
  // if(true) return <ErrorModal handleClose={() => {}} errorMessage="Oshibka dostupa" />;

  return (
    <>
      <div className="container-wraper pb-2">
        <Container>
          <NavBar />
          <PriceHeader activePrice={activePrice} setActivePrice={setActivePrice} />
          <Body hourRange={hourRange}
           activePrice={activePrice}
           setLowPriceTimestamp={setLowPriceTimestamp} />
        </Container>
      </div>
      {activePrice === 'low' ?
        <FooterLowPrice 
        hourRange={hourRange}
        setHourRange={setHourRange}
        lowPriceTimestamp={lowPriceTimestamp} 
        />
        : <FooterHighPrice />}
        {!lowPriceTimestamp && <Loading/>}
        {/* esli ubratj ! s lowpr..to loading budet vsegda rabotatj na stranice */}
    </>
  );
}

export default App;
