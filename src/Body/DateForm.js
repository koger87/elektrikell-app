import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import moment from 'moment';
import ErrorModal from '../ErrorModal';


function DateForm({ show, setShow, setSearchDate }) {
    const [errorMessage, setErrorMessage] = useState(null)

    const handleClose = () => setShow(false);
    const handleSubmit = (event) => {
        event.preventDefault();

        let start = event.target.start.value;
        let end = event.target.end.value

        const currentDate = moment();

        if (!start || !end) {
            setErrorMessage('Alg ja Lõpp kuupäev peab olema määratud');
            return;
        }
        if (currentDate.isBefore(start)) {
            setErrorMessage('Alg kuupäev peab olema minevikus');
            return;
        }
        if (currentDate.isAfter(end)) {
            setErrorMessage('Lõpp kuupäev peab olema tulevikus')
            return;
        }

        start = moment(start);
        end = moment(end);

        if (start.diff(end, 'days') >= 1) {
            setErrorMessage('Alg ja Lõpp kuupäeva vahe peab olema rohkem kui 1 päev');
            return;
        }

        setSearchDate({
            start: start.format(),//prowloe - eto start 
            end: end.format(),
            pastHours: currentDate.diff(start, 'hours'),
        });
    };


    //moment.isSameOrAfter/Before
    // if(!start || !end) {
    //     setErrorMessage('alg kup peab olema maaratud')
    //     return;
    // }

    // if (moment(start).isAfter(moment())) {
    //     setErrorMessage("Vale algus kuupäev")
    // }
    // else if (moment(end).isBefore(moment())) {
    //     setErrorMessage("Vale lõpp kuupäev")
    // } else {
    // start = moment(start)
    // end = moment(end)

    //if(start.diff(end, 'days') < 1 {
    // setErrorMessage('alg ja lopp kuupaeva vahe peab rohkem kui 1 paev')
    // return
    // })

    //         setSearchDate({
    //             start: moment(start).format(),//prowloe - eto start 
    //             end: moment(end).format(),
    //             pastHours: moment().diff(moment(start), 'hours'),
    //         });
    //     }
    // }

    return (
        <>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Määra kuupäevad</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {/* Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc. */}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Alates</Form.Label>
                            <Form.Control name="start" type="datetime-local" placeholder="Start date" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Kuni</Form.Label>
                            <Form.Control name="end" type="datetime-local" placeholder="end date" />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="w-100">
                            Vali
                        </Button>
                    </Form>
                </Offcanvas.Body>
            </Offcanvas>
            <ErrorModal errorMessage={errorMessage} handleClose={() => setErrorMessage(null)} />
            {/* kak v priceHeader errormodal */}
        </>
    );
}

export default DateForm;