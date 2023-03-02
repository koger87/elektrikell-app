import { Routes, Route } from "react-router-dom";
import ElektriKell from "./ElektriKell";
import About from "./About";

function App() {
    return (
        <Routes>
            <Route path="/" element={<ElektriKell />} />
            <Route path="/:activePrice" element={<ElektriKell />} />
            <Route path="/about" element={<About />} />
        </Routes>
        
    );
}
export default App;