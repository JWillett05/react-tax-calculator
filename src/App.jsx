import { useState } from 'react';
import Header from './Header.jsx';
import CalcButtons from './CalcButtons.jsx';
import Result from './Result.jsx';

function App() {
    const [calc, setCalc] = useState({
        sign: "", // selected sign
        num: "0", // entered value
        res: "" // calculated value
    });


    



    function handleClick(value){
        if (!isNaN(value)) {
            setCalc({
                ...calc,
                num:calc.num === "0" ? (value) : calc.num + value
            });
        }


        console.log(value)
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
