
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

function Durations({ hourRange, setHourRange }) {
   
  // const [activeTime, setActiveTime] = useState(1);
  const buttons = [1, 2, 3, 4, 6, 8];
    
  return (
    <ButtonToolbar aria-label="Toolbar with button groups" className="justify-content-center">
      <ButtonGroup aria-label="First group">
        {buttons.map(time => (
            <Button 
            key={time} 
            active={time === hourRange} 
            onClick={() => setHourRange(time)}>
            {time}h
            </Button>
        ))}
        {/* esli time = activtime-to true, esli net - false */}
      </ButtonGroup>
    </ButtonToolbar>
  );
}

export default Durations;