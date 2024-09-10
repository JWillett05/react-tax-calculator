export default function CalcButtons({children, onSelect}){
    function handleClick(){
        console.log("hello")
    }
    return(
        <div id="calc">
            <div id="buttons">
                <button onClick={handleClick} id="button-char">1</button>
                <button onClick={handleClick} id="button-char">2</button>
                <button onClick={handleClick} id="button-char">3</button>
                <button onClick={handleClick} id="button-char">%</button>
                <button onClick={handleClick} id="button-char">4</button>
                <button onClick={handleClick} id="button-char">5</button>
                <button onClick={handleClick} id="button-char">6</button>
                <button onClick={handleClick} id="button-char">X</button>
                <button onClick={handleClick} id="button-char">7</button>
                <button onClick={handleClick} id="button-char">8</button>
                <button onClick={handleClick} id="button-char">9</button>
                <button onClick={handleClick} id="button-char">-</button>
                <button onClick={handleClick} id="button-char">0</button>
                <button onClick={handleClick} id="button-char">.</button>
                <button onClick={handleClick} id="button-char">=</button>
                <button onClick={handleClick} id="button-char">+</button>
            </div>
        </div>

        

    )
}