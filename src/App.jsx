import { useState } from 'react';
import Header from './Header.jsx';
import CalcButtons from './CalcButtons.jsx';
import Result from './Result.jsx';

function App() {
    const [calc, setCalc] = useState({
        sign: "", // selected sign
        num: "0", // entered value
        res: "0" // calculated value
    });

    function handleClick(value) {
        if (!isNaN(value)) {
            setCalc({
                ...calc,
                num: calc.num === "0" ? value : calc.num + value
            });
        } else if (value === '=') {
            try {
                const result = eval(calc.num.replace('X', '*').replace('%', '/'));
                setCalc({
                    ...calc,
                    res: result.toString(),
                    num: "0"
                });
            } catch (error) {
                console.error("Cannot Evaluate Error.", error);
                setCalc({
                    ...calc,
                    res: "Error",
                    num: "0"
                });
            }
        } else if (['+', '-', 'X', '%'].includes(value)) {
            const operator = value === 'X' ? '*' : value === '%' ? '/' : value;
            setCalc({
                ...calc,
                num: calc.num + operator
            });
        }

        console.log(value);
    }

    return (
        <div>
            <Header />
            <Result value={calc.num ? calc.num : calc.res} />
            <CalcButtons onClick={handleClick} />
        </div>
    );
}

export default App;
