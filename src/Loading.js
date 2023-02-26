// import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';



// function Loading() {
//     return (
//         <Container className="position-absolute top-50 start-50 translate-middle d-flex align-items-center">
//             <Spinner animation="border" variant="primary" />
//             <div className="fs-4 px-2">Elektrikell</div>
           
//         </Container>
    
//     );
// }

// export default Loading;


function ButtonLoading() {
    return (
      <>
      <Container>
        <div className='position-absolute top-50 start-50 translate-middle d-flex align-items-center'>
        <Button variant="primary" disabled>
          <Spinner
            as="span"
            animation="border"
            size="lg"
            role="status"
            aria-hidden="true"
          />
          <span className="visually-hidden">Elektrikell</span>
        </Button>{' '}
        <Button variant="primary" disabled>
          <Spinner
            as="span"
            animation="grow"
            size="lg"
            role="status"
            aria-hidden="true"
          />
          Elektrikell
        </Button>
        </div>
        </Container>
      </>
    );
  }
  
  export default ButtonLoading;