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
    
    const btnValues = [
        ["C", "%", "/"],
        [7, 8, 9, "X"],
        [4, 5, 6, "-"],
        [1, 2, 3, "+"],
        [0, ".", "="],
      ];

    function handleClick(){

    }

    return (
        <div>
            <Header />
            <Result value={calc.num ? calc.num : calc.res} />
            <CalcButtons onClick={handleClick}/>
        </div>
    );
}

export default App;
