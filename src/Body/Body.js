import { useState, useEffect } from 'react';
import {
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Line,
    ReferenceLine,
} from 'recharts';
import { getPriceData } from '../services/apiService';
import ErrorModal from '../ErrorModal';
import moment from 'moment';
import AreaLow from './AreaLow';
import AreaHign from './AreaHigh';
import Button from 'react-bootstrap/Button';
import DateForm from './DateForm';

const pastHours = 10;
const start = moment().subtract(pastHours, 'hours').format();
const end = moment().add(30, 'hours').format();

function Body({ hourRange, activePrice, setLowPriceTimestamp }) {
    const [data, setData] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    // const [rangePrices, setRangePrices] = useState(null);
    const [showForm, setShowForm] = useState(null);
    const [searchDate, setSearchDate] = useState({
        start, end, pastHours
    });

    useEffect(() => {
        getPriceData(searchDate)
            .then(({ success, data, message }) => {

                if (!success) {
                    throw message[0];
                }

                const newData = data.ee.map(d => {

                    return {
                        ...d,
                        price: +(d.price / 10 * 1.2).toFixed(2),
                        hour: moment.unix(d.timestamp).hours(),
                        current: moment().isSame(moment.unix(d.timestamp), "hour"),
                    }
                });

                setData(newData);
            })
            .catch((error) => setErrorMessage(error.toString()));
    }, [searchDate]);

    // useEffect(() => {
    //     if (data.length) {
    //         const timestampNow = moment().unix();
    //         const futureData = data.filter((el) => el.timestamp > timestampNow);
    //         const hourRangeLocal = activePrice === "low" ? hourRange : 1;
    //         const rangePrices = [];

    //         futureData.forEach((v, i, arr) => {
    //             const range = arr.slice(i, i + hourRangeLocal);
    //             if (range.length === hourRangeLocal) {
    //                 let sum = 0;
    //                 range.forEach(v => sum += v.price);
    //                 rangePrices.push({ sum, i, timestamp: v.timestamp });
    //             }
    //         });
    //         rangePrices.sort((a, b) => a.sum - b.sum);
    //         setRangePrices(rangePrices);
    //     }
    // }, [hourRange, data, activePrice]);
const chartsChildren = (
    <>
    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="hour" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="price" stroke="#8884d8" />
                    <ReferenceLine x={data?.findIndex((el) => el.current)} stroke="red" />
                    </>
);
    return (
        <>
                    {activePrice === "high"
                        ?
                       <AreaHign data={data}>
                        {chartsChildren}
                       </AreaHign>
                        :
                        <AreaLow {... {hourRange, setLowPriceTimestamp, searchDate, data }}>
                            {chartsChildren}
                        </AreaLow>
                    }
            
            <Button variant="outline-primary" onClick={() => setShowForm(true)} size="sm">
                Määra kuupäevad
            </Button>

            <DateForm
                show={showForm}
                setShow={setShowForm}
                setSearchDate={setSearchDate} />

            <ErrorModal
                errorMessage={errorMessage}
                handleClose={() => setErrorMessage(null)} />
        </>
    );
}

export default Body;
