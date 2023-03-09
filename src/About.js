
import Accordion from 'react-bootstrap/Accordion';
import { Container } from 'react-bootstrap';
// import Image from 'react-bootstrap/Image'


function About() {
    return (
        <div className="position-fixed w-0 h-50 top-0 text-center">
            {/* // <div className="position-fixed w-50 h-50 top-0 d-flex bg-black align-items-center justify-content-center" > */}
            <h1><i><br />Siin on mõni informatsioon meie FrontEnd gruppist, mis teostas selle projekti oma jõu ja õpetaja abiga! </i></h1>
            <br />

            <Container >
                <Accordion defaultActiveKey={['3']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Meist</Accordion.Header>
                        <Accordion.Body >
                            GAMMA INTELLIGENCE Frontend-arendaja intensiivkursus algajatele React.js baasil
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Meie Moto</Accordion.Header>
                        <Accordion.Body>
                            <h2> "Ei eksi, kes mitte midagi ei tee!" </h2>
                            <i>Ladina vanasõna</i>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Kust Meid leida</Accordion.Header>
                        <Accordion.Body>
                            Õppeklassid asuvad kahes kohas: 1. Tartu mnt. 18 ja
                            2. Tartu mnt. 53
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