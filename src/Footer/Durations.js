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

  // useSelector - eto hook, kotorii, sluwaet Redux obloko, i esli izmenintsa sostojanie, 
  // to useSelektor  - inicializiruet otrisovku komponenta
  // useSelector - prinemaet, funkciju, kak argument, i eta funkcija, opredeljaet, kakoe sostojanie sluwatj

  const durationRange = useSelector((state) => state.durationRange);

// Dlja inicilizirovanija izminenija sostojanija, ispolzuetsa - dispatch.
// Dispatch, etot, tot kto otpravit action v obloko store/ redux sostojanie.
// Dispatch, peredast, naw action v Redux reducer, tot zapustit funkciju, kotoraja izmenit sostojanie,
// 4to potom podxvatit useSelector

  const dispatch = useDispatch();

  const durations = [1, 2, 3, 4, 6, 8];

  const handleClick = (duration) => {
    if (durationParam) {
      navigate(`/`);
    }
    // v dispatch peredajom Action, a v Action peredajom novii dannii o sostojanie.
    // v reducer, peredastsa object s { type: setHourRange/durationRange, payload: duration}
    dispatch(setDurationRange(duration));
  }
  // Eventy:
  // Sobitija eto 4to to , 4to proizowlo v brauzere.
  // Napr. polzovatelj 4to to nazal u nas na projekte, to brauzer, sxvatil eto i pereda; projektu.
  // esli u nas v etom meste stoit triger/sobitii, to etot triger, zapuskaet obrabot4ik sobitija.
  // Triger nazivajutsa s klu4ego slova - 'on'
  // Obrabot4iki priviki nazivatj, s klju4ego slova 'handle'
  // Brauzer peredajot v obrapot4ik objekt - event, v korotom soderaitsa vsja informacija ob etom sobitii

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