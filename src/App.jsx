import { useState } from 'react';
import Header from './Header.jsx';
import CalcButtons from './CalcButtons.jsx';
import Result from './Result.jsx';

function App() {
    const [calc, setCalc] = useState({
        sign: "", // selected sign
        num: "", // entered value
        res: "" // calculated value
    });

    return (
        <div>
            <Header />
            <CalcButtons />
            <Result value={calc.num ? calc.num : calc.res} />
        </div>
    );
}

export default App;
