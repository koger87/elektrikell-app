import Container from 'react-bootstrap/Container';
import Durations from './Durations';
import Countdown from 'react-countdown';


function FooterLowPrice(props) {
    return (
        <Container className="text-center">
            <div>Tahan tarbida</div>
            <div>
                <Durations {...props} />
            </div>
            <div>Parim aeg</div>
            <div>
                {props.lowPriceTimestamp && <Countdown date={props.lowPriceTimestamp * 1000} />}
                {/* tolko kogda komp.pojavitsa, tolko togda otrazatj ego */}
            </div>
            <div>Siin on</div>
        </Container>
    );
}

export default FooterLowPrice;