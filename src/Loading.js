import Spinner from 'react-bootstrap/Spinner';

function Loading() {
    return (
        <div className="position-fixed w-100 h-100 top-0 d-flex bg-white align-items-center justify-content-center" style={{zIndex: 2}}>
            <Spinner animation="border" variant="primary" /><div className="fs-4 px-2">Elektrikell</div>
        </div>
    );
}

export default Loading;




// import Container from 'react-bootstrap/Container';
// import Spinner from 'react-bootstrap/Spinner';
// import Button from 'react-bootstrap/Button';
// import { Container } from 'react-bootstrap';



// function Loading() {
//     return (
//       <div className="position-fixed w-100 h-100 top-0 d-flex bg-white" style={{zIndex: 2}}>
//         <Container className="d-flex gap-5 flex-column align-items-center jusyify-content-center">
//             <Spinner animation="border" variant="primary" />
//             <div className="fs-4 px-2">Elektrikell</div>
//         </Container>
//     </div>
//     );
// }

// export default Loading;


// function ButtonLoading() {
//     return (
//       <>
//       <Container>
//         <div className='position-absolute top-50 start-50 translate-middle d-flex align-items-center'>
//         <Button variant="primary" disabled>
//           <Spinner
//             as="span"
//             animation="border"
//             size="lg"
//             role="status"
//             aria-hidden="true"
//           />
//           <span className="visually-hidden">Elektrikell</span>
//         </Button>{' '}
//         <Button variant="primary" disabled>
//           <Spinner
//             as="span"
//             animation="grow"
//             size="lg"
//             role="status"
//             aria-hidden="true"
//           />
//           Elektrikell
//         </Button>
//         </div>
//         </Container>
//       </>
//     );
//   }
  
//   export default ButtonLoading;