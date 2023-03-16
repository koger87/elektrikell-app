import { Routes, Route } from 'react-router-dom';
import About from './About';
import ElektriKell from './ElektriKell';

// Komopnenti, eto obi4nii JavaScript funkcii, kotorii vozvrawajut React element
// Nazvanie komponenta, dolzno na4inatsa, s zaglavnoi bukvi. Dlja togo, 4to bi razli4atj komponenti, ot Html elementov v JSX

// Jsx eto novii sinteks koda ot React js, kotorii pozvoljaet pisatj Html i Javascipt, vmeste.
// Komponenti dolzni vozvrawatj tolko 1 React element, napisanii blagodarj JSX

function App() {

    // Route//ssilki.
    // Kazdii komponent Route, otve4aet za kakujunibudj ssilku.
    // V route, mi peredajom property path, kotoraja opredeljaet ssilku, po kotoroi on iniciliziruet komponent
    // v element Property, mi peredajom tot sami komponent.

    // Takzi mi mozem peredatj dannii s silki v komponent
    // ':' - ozna4ajut, 4to mi, vozmjom, vsjo 4to napisano posle / (slash), i peredadim v peremennuju,
    //  nazavanie kotorogo, mi opredelil, posle ':'
    // - eto nazivajut parametri ssilki
    // v nawem slu4ai http://localhost:3000/low/:6  - 
    // - budet ozna4atj, 4to mi xotim videtj komponent Elektrikell, s parametrom - durationParam = 6

    return (
        <Routes>
            <Route path="/" element={<ElektriKell />} />
            <Route path="/:activePrice" element={<ElektriKell />} />
            <Route path="/low/:durationParam" element={<ElektriKell />} />
            <Route path="/about" element={<About />} />
        </Routes>
    );
}

export default App;