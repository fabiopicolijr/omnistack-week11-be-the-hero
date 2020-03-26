import React, {useState} from 'react';

import Header from './Header'
// JSX (Javascript XML)
function App() {
    const [counter, setCounter] = useState(0); // Array [valor, funcaoAtualizacao]

    function increment(){
        setCounter(counter+1);
        console.log(counter);
    }

    return (
        <div>
            <Header>Contador: {counter}</Header>
            <button onClick={increment}>Incrementar</button>
        </div>
  );
}
export default App;