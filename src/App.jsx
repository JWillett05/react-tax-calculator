import { useState } from 'react';
import Header from './Header.jsx';
import CalcButtons from './CalcButtons.jsx';
import Result from './Result.jsx';




function App() {
    const [calc, setCalc] = useState({
        sign: "", // selected sign
        num: "0", // entered value
        res: "0", // calculated value

    });

    function handleClick(value) {
        if (!isNaN(value)) {
            setCalc({
                ...calc,
                num: calc.num === "0" && calc.res === "0" ? value : calc.num + value,
                res: calc.res !== "0" ? "0" : calc.res
            });
            
        }else if (value === 'Tax +') {
                const result = (calc.num) * 1.2;  
                setCalc({
                    ...calc,
                    res: result.toString(),  
                    num: result.toString(),

                });
            }
    
            else if (value === 'Tax -') {
                const result = (calc.num) / 1.2;  
                setCalc({
                    ...calc,
                    res: result.toString(),  
                    num: result.toString(),

                });
            }
         else if (value === '=') {
             
                const expression = calc.num.replace('X', '*').replace('%', '/');
                const result = eval(expression);
                setCalc({
                    ...calc,
                    res: result.toString(),  
                    num: result.toString(),
                });
            
        } else if (value === 'C') {
            setCalc({
                sign: "",
                num: "0",
                res: "0",
            });
    
        } else if (['+', '-', 'X', '%'].includes(value)) {
            const operator = value === 'X' ? '*' : value === '%' ? '/' : value;
            
                setCalc({
                    ...calc,
                    num: calc.res !== '0' ? calc.res + operator : calc.num + operator,
                    res: '0',
                    hasDec: false,
                    operatorUsed: true
                });
    
            } 
            
            else if (value === '.' && !calc.hasDec) {
                setCalc({
                    ...calc,
                    num: calc.num + value,
                    hasDec: true
                });
            } else if (!calc.hasDec) {
                setCalc({
                    ...calc,
                    num: calc.operatorUsed ? "." : calc.num + value,
                    hasDec: true,
                })
            }
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
