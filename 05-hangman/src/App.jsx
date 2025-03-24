import { useState } from "react";
import Buttons from "./Buttons";
import Hangman from "./Hangman";
import Result from "./Result";
import Word from "./Word";
import { wordList } from "https://cdn.jsdelivr.net/gh/vimtaai/elte-efop-feladattar@926d45a525eecee2f8ca159faa585192263ab196/tasks/hangman/solutions/04/words.js";

const random = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;

const App = () => {
  // Application state (data)
  const maxBadTips = 9;
  const word = "alma";
  const [tips, setTips] = useState([]);
  const buttonText = "aábcdeéfghiíjklmnoóöőpqrstuúüűvwxyz";

  // Event handlers
  const onHandleClick = (letter) => {
    setTips([...tips, letter]);
  };

  // Computed values
  const won = word.split("").every((letter) => tips.includes(letter) && tips.length <= maxBadTips);
  const lost = !won && tips.length >= maxBadTips;
  const wordObject = word
    .split("")
    .map((letter) => ({ letter, isVisible: tips.includes(letter) || lost, missing: lost && !tips.includes(letter) }));

  return (
    <>
      <h1>Hangman</h1>

      <Word won={won} wordObject={wordObject} />

      <button>New game</button>
      <Buttons buttonText={buttonText} onHandleClick={onHandleClick} />

      <Result />

      <Hangman />
    </>
  );
};

export default App;
