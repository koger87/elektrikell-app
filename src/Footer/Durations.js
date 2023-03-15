import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { useParams, useNavigate } from 'react-router-dom';
import { setDurationRange } from '../services/stateService';
import { useSelector, useDispatch } from 'react-redux';
// import { duration } from 'moment/moment';

function Durations() {

  const { durationParam } = useParams();
  const navigate = useNavigate();

  const durationRange = useSelector((state) => state.durationRange);
  const dispatch = useDispatch();

  const durations = [1, 2, 3, 4, 6, 8];

  const handleClick = (duration) => {
    if (durationParam) {
      navigate(`/`);
    }
    dispatch(setDurationRange(duration));
  }

  return (
    <ButtonToolbar aria-label="Toolbar with button groups" className="justify-content-center">
      <ButtonGroup aria-label="First group">
        {durations.map(duration => {
          const selectedDuration = durationParam ? +durationParam : durationRange;
          return (
            <Button
              key={duration}
              active={duration === selectedDuration}
              onClick={() => handleClick(duration)}>
              {duration}h
            </Button>
          )
        }
        )}
      </ButtonGroup>
    </ButtonToolbar>
  );
}

export default Durations;