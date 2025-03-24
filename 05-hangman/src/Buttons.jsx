/* eslint-disable react/prop-types */
const Buttons = ({ buttonText, onHandleClick }) => {
  return (
    <div id="betuk">
      {buttonText.split("").map((letter, idx) => (
        <button onClick={() => onHandleClick(letter)} key={idx} disabled={false}>
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
