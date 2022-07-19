import React, { useState } from "react";
import "../index.css";

function Rules() {
  const [rules, setRules] = useState(false);
  const [buttonText1, setButtonText1] = useState(false);
  const buttonText = false;

  const handleShowRules = e => {
    e.preventDefault();
    setRules(true);
    setButtonText1(true);
  };

  const handleHide = e => {
    e.preventDefault();

    setRules(false);
    setButtonText1(false);
  };

  return (
    <div className="container">
      {!buttonText1 && (
        <button className="show-btn" onClick={handleShowRules}>
          Show Rules
        </button>
      )}
      {!buttonText && buttonText1 && (
        <button className="hide-btn" onClick={handleHide}>
          Hide Rules
        </button>
      )}
      {rules ? (
        <p className="text">
          Try to guess the pattern, in both order and color, within ten turns.
          After submitting a row, a small green squared is show for each circle
          in a correct position and color. A yellow square indicates the
          existence of a correct color in an incorrect position. More info on{" "}
          <a href="https://en.wikipedia.org/wiki/Mastermind_(board_game)">
            Wikipedia
          </a>
          .
        </p>
      ) : null}
    </div>
  );
}

export default Rules;
