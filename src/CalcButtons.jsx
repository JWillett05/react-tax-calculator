export default function CalcButtons({ onClick }) {
    function handleClick(value) {
        onClick(value);
    }


    
    return (
        <div id="calc">
            <div id="buttons" >
            {/* <button onClick={() => handleClick('C')} id="tax">C</button>
            <button onClick={() => handleClick('Tax -')} id="tax">Tax -</button>
            <button onClick={() => handleClick('Tax +')} id="tax">Tax +</button> */}

                <button onClick={() => handleClick('1')} id="button-char">1</button>
                <button onClick={() => handleClick('2')} id="button-char">2</button>
                <button onClick={() => handleClick('3')} id="button-char">3</button>
                <button onClick={() => handleClick('%')} id="button-char">%</button>
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
    );
}
