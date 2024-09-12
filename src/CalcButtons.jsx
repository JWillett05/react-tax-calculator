import { useEffect } from "react";


export default function CalcButtons({ onClick }) {
    function handleClick(value) {
        onClick(value);
    }

    useEffect(() =>{
        const handleKeyPress = (e) => {
            const key = e.key.toLowerCase();

            switch (key) {
                case 'c':
                    handleClick('C');
                    break;
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                case '0':
                    handleClick(key);
                    break;
                case '/':
                    handleClick('%');
                    break;
                    case '*':
                    handleClick('X');
                    break;
                    case '-':
                    handleClick('-');
                    break;
                    case '+':
                    handleClick('+');
                    break;
                    case 'enter':
                    handleClick('=');
                    break;
                    case '#':
                    handleClick('Tax +');
                    break;
                    case ";":
                    handleClick('Tax -');
                    break;
                        default:
                    break;
            }
        };
        window.addEventListener('keydown', handleKeyPress)

        return () => {
            window.removeEventListener('keydown', handleKeyPress)
        }
    })
    
    
    
    return (
        <div>
                <div className="top-buttons" >
                <button onClick={() => handleClick('C')} className="C">Clear</button>
                <button onClick={() => handleClick('Tax -')} id="tax">Tax - <br/> (;)
</button>
                <button onClick={() => handleClick('Tax +')} id="tax">Tax + <br/> (#)</button> 
            </div>
        <div id="calc">
        <div className="buttons" >
            

                <button onClick={() => handleClick('1')} id="button-char">1</button>
                <button onClick={() => handleClick('2')} id="button-char">2</button>
                <button onClick={() => handleClick('3')} id="button-char">3</button>
                <button onClick={() => handleClick('%')} id="button-char">/</button>
                <button onClick={() => handleClick('4')} id="button-char">4</button>
                <button onClick={() => handleClick('5')} id="button-char">5</button>
                <button onClick={() => handleClick('6')} id="button-char">6</button>
                <button onClick={() => handleClick('X')} id="button-char">X</button>
                <button onClick={() => handleClick('7')} id="button-char">7</button>
                <button onClick={() => handleClick('8')} id="button-char">8</button>
                <button onClick={() => handleClick('9')} id="button-char">9</button>
                <button onClick={() => handleClick('-')} id="button-char">-</button>
                <button onClick={() => handleClick('0')} id="button-char">0</button>
                <button onClick={() => handleClick('.')} id="button-char">.</button>
                <button onClick={() => handleClick('=')} id="button-char">=</button>
                <button onClick={() => handleClick('+')} id="button-char">+</button>
            </div>
        </div>
        </div>
    );
}
