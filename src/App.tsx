import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Component/Counter/Counter";

function App() {

    let [counter, setCounter] = useState(0)

    let resetDisabled = counter === 0

    let incDisabled = counter >= 5

    return (
        <div className="App">
            <Counter
                counter={counter}
                setCounter={setCounter}
                resetDisabled={resetDisabled}
                incDisabled={incDisabled}
            />
        </div>
    );
}

export default App;
