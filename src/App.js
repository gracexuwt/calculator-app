import React, { useState } from 'react';
import './App.css';


const App = () => {
    const [result, setResult] = useState("");
    
    const handle = (e) => {
        setResult(result.concat(e.target.name));

    }
    const clear = () => {
        setResult("");
    }
    const back = () => {
        setResult(result.slice(0,result.length-1))
    }
    const calculate = () => {
        try {
            setResult(evil(result).toString());
        }
        catch(err){ // When mutliple symbols are lined up
            setResult("Error")
        }
    }
    function evil(fn) {
        return new Function('return ' + fn)();
    }

    return(
        <div className="wrapper">
            <form>
                <input type="text" value={result}/>
            </form>

            <div className="keypad">
                <button class="highlight" onClick={clear} id="clear">Clear</button>
                <button class="highlight" onClick={back} id="back">C</button>
                <button class="highlight" name="/" onClick={handle}>&divide;</button>
                <button name="7" onClick={handle}>7</button>
                <button name="8" onClick={handle}>8</button>
                <button name="9" onClick={handle}>9</button>
                <button class="highlight" name="*" onClick={handle}>&times;</button>
                <button name="4" onClick={handle}>4</button>
                <button name="5" onClick={handle}>5</button>
                <button name="6" onClick={handle}>6</button>
                <button class="highlight" name="-" onClick={handle}>&ndash;</button>
                <button name="1" onClick={handle}>1</button>
                <button name="2" onClick={handle}>2</button>
                <button name="3" onClick={handle}>3</button>
                <button class="highlight" name="+" onClick={handle}>+</button>
                <button name="0" onClick={handle}>0</button>
                <button name="." onClick={handle}>.</button>
                <button class="highlight" onClick={calculate} id="result">=</button>
            </div>
        </div>
    );
}

export default App;