
// function About() {
//     return (
//         <div>About page</div>
//     )
// }
// export default About


import Accordion from 'react-bootstrap/Accordion';
import { Container } from 'react-bootstrap';
// import Image from 'react-bootstrap/Image'


function About() {
    return (
        <div className="position-fixed w-0 h-50 top-0 text-center">  
                {/* // <div className="position-fixed w-50 h-50 top-0 d-flex bg-black align-items-center justify-content-center" > */}
<h1><i><br/>Siin on mõni informatsioon meie FrontEnd gruppist, mis teostas selle projekti oma jõu ja õpetaja abiga! </i></h1>
<br/>

<Container >
        <Accordion defaultActiveKey={['3']} alwaysOpen>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Meist</Accordion.Header>
                <Accordion.Body >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Meie Moto</Accordion.Header>
                <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Kust Meid leida</Accordion.Header>
                <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Meie Näod</Accordion.Header>
                <Accordion.Body>
                <img
          alt=""
          src="https://news.cuna.org/ext/resources/Online/2018/11/11-12-18_superheroes_1200.jpg?t=1542040683&width=696"
          width="400"
          height="300"
          className="d-inline-block align-top rounded"
        />
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        </Container>
        </div>  
    );
}

export default About;