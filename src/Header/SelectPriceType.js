import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function SelectPriceType({ activePrice, setActivePrice }) {

  return (
    <ButtonGroup>
      <Button active={activePrice === 'low'} onClick={() => setActivePrice('low')}>Odav tunnid</Button>
      <Button active={activePrice === 'high'} onClick={() => setActivePrice('high')}>Tiputunnid</Button>
    </ButtonGroup>
  );
}

export default SelectPriceType;