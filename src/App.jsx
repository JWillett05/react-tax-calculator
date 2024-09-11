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
                num: calc.num === "0" && calc.res === "0" ? value : calc.num + value,
                res: calc.res !== "0" ? "0" : calc.res 
            });
        } else if (value === '=') {
            try {
                const expression = calc.num.replace('X', '*').replace('%', '/');
                console.log("Expression to evaluate:", expression);
                
                const result = eval(expression);
                console.log("Evaluation result:", result);
                
                setCalc({
                    ...calc,
                    res: result.toString(),  
                    num: result.toString()  
                });
            } catch (error) {
                console.error("Cannot Evaluate Error.", error);
                setCalc({
                    ...calc,
                    res: "Error",
                    num: "0"
                });
            }
        } else if (value === 'C') {
            setCalc({
                sign: "",
                num: "0",
                res: "0"
            });
        } else if (['+', '-', 'X', '%'].includes(value)) {
            const operator = value === 'X' ? '*' : value === '%' ? '/' : value;
            
            if (calc.res !== '0'){
                setCalc({
                    ...calc,
                    num: calc.res + operator, 
                    res: '0'
                })

            } else {
                setCalc({
                    ...calc,
                    num: calc.num + operator
                })
            
            }
        } else if (value === '.') {
            if (!calc.num.includes('.')) {
                setCalc({
                    ...calc,
                    num: calc.num + value
                });
            }
        }

        console.log("Current state:", calc);
    }

    return (
        <>
            <Header />
            <Result value={calc.num ? calc.num : calc.res} />
            <CalcButtons onClick={handleClick} />
        </>
    );
}

export default App;
