import Button from "./Button";
import { useState } from 'react';

function GuessControl({ onGuess }) { 
  const [currentGuess, setCurrentGuess] = useState(""); 

  function handleInputChange() {
    let currentGuess = event.target.value;
    setCurrentGuess(currentGuess);
  }

  function onSubmitGuess() {
    onGuess((Number(currentGuess)));
    setCurrentGuess("");
  }

  return (
    <div>
      <input
        type="number"
        value={currentGuess}
        onChange={handleInputChange}
      />
      <Button onClick={onSubmitGuess}>Submit Guess</Button>
    </div>
  );
}

export default GuessControl;
