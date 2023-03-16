import { useState, useEffect } from 'react';
import { ReferenceArea, ResponsiveContainer, LineChart } from 'recharts';
import { rangePricesGenerator } from '../helpers/rangePrices';

function AreaHigh({ data, children }) {

    // UseState - eto React hook, kototrii pozvoljaet rabotatj, s sostojaniem komponenta.
    // Sostojanie, po suti, eto peremennaja , kotorija rezit v sebja ljuboi tip dannix, kotorii, kasaetsa tolko etogo koponenta.
    // useState, prinemaet kak argument izna4alnoe sostojanie,
    // Toestj, pri pervoi otrisvoki komponenta, nazan4itsa peremennaja, s etim izna4alnim  zna4eniem.
    // UseState pri incilizacii vozvrawaet massiv iz 2 x elementov.
    // [0] = izna4alnoe sostojanie,
    // (a s indeksom) [1] = funkcija kotoraja menjaet zna4enie sostojanija. V na4alo nazvanija obi4no stavim - 'set'
    // Pri inicializacii izmenenija zapuskaetsa novaja otrisovka komponenta
    // Vse hook (huki) Reacta nazivajutsa so slova 'use', i vse oni vozdeistvujut na otrisovku komponenta.

    const [xHigh, setXHigh] = useState(null);

    useEffect(() => {

        if (data) {
            const rangePrices = rangePricesGenerator(data);

            rangePrices.reverse();

            const half = rangePrices.slice(0, rangePrices.length / 2);
            let sum = 0;
            half.forEach(v => {
                sum += v.sum;
            });
            let average = sum / half.length;
            setXHigh(half.filter(v => v.sum > average));

        }
    }, [data]);

    const currentindex = data?.findindex((el) => el.current);

    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart
                data={data}>
                {children}
                {xHigh?.length ? xHigh.map(x =>
                    <ReferenceArea
                        key={x.i}
                        x1={x.i + currentindex}
                        x2={x.i + currentindex + 1}
                        stroke="red"
                        fill="red"
                        strokeOpacity={0.3}
                        fillOpacity={0.3}
                    />
                ) : null}
            </LineChart>
        </ResponsiveContainer>
    );
}

export default AreaHigh;