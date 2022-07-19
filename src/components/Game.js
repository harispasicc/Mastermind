import React, { useState } from "react";
import Board from "./Board";
import Rules from "./Rules";
import Colors from "./Colors";

const colors = ["turquoise", "yellow", "green", "red", "orange", "purple"];
const colorsSolution = [];
for (let j = 0; j < 4; j++) {
  colorsSolution.push(colors[Math.floor(Math.random() * colors.length)]);
}

const Game = () => {
  const [activeRow, setActiveRow] = useState(0);
  const [activeColor, setActiveColor] = useState("");
  const [previousHints, setpreviousHints] = useState([]);
  const [currentRow, setCurrentRow] = useState(["", "", "", ""]);
  const [previousRow, setpreviousRow] = useState([]);
  const [check, setCheck] = useState(false);
  const [victory, setVictory] = useState(false);
  const [defeat, setDefeat] = useState(false);
  const [hints, setHints] = useState([0, 0, 0, 0]);
  const activateColor = prop => {
    setActiveColor(prop);
  };

  const setColor = (color, id) => {
    if (victory) {
      return false;
    }
    const rowId = +id.substr(1, id.indexOf("_") - 1);
    const pegId = +id.substr(id.indexOf("_") + 1);
    let arrayFull = 0;

    if (activeRow === rowId && color) {
      currentRow[pegId] = color;
      setCurrentRow([...currentRow]);
    }

    for (let i in currentRow) {
      if (currentRow[i].length > 0) {
        arrayFull++;
      }
    }

    if (arrayFull === currentRow.length) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  };

  const checkRow = () => {
    const presentRow = JSON.parse(JSON.stringify(currentRow));
    const correctRow = JSON.parse(JSON.stringify(colorsSolution));
    for (let i = 0; i < 4; i++) {
      if (presentRow[i] === correctRow[i]) {
        hints[i] = 2;
        delete presentRow[i];
        delete correctRow[i];
      }
    }
    for (let i in presentRow) {
      for (let j in correctRow) {
        if (presentRow[i] === correctRow[j]) {
          hints[i] = 1;
          delete presentRow[i];
          delete correctRow[j];
        }
      }
    }
    hints.sort((a, b) => b - a);
    if (hints[0] === 2 && hints[1] === 2 && hints[2] === 2 && hints[3] === 2) {
      return setVictory(true);
    }
    if (activeRow >= 10 - 1 && !victory) {
      return setDefeat(true);
    }
    previousHints.push(hints);
    previousRow.push(currentRow);
    setHints([0, 0, 0, 0]);
    setActiveRow(activeRow + 1);
    setpreviousHints(previousHints);
    setCurrentRow(["", "", "", ""]);
    setpreviousRow(previousRow);
    setCheck(false);
    setVictory(victory);
    setDefeat(defeat);
  };

  const newGame = () => {
    window.location.reload();
  };

  let message = victory ? "You Win !" : defeat ? "You Lost !" : "";

  let solutionPegs = [];
  let solutionClass = "";
  const isHidden = defeat && !victory ? "" : "hidden";
  const playAgain = !defeat && victory ? "" : "hidden";
  for (let i = 0; i < colorsSolution.length; i++) {
    solutionClass = colorsSolution[i];
    solutionPegs.push(
      <div className={"color-holder " + solutionClass} key={"s_" + i}></div>
    );
  }
  return (
    <div className="game-container">
      <h1>Mastermind</h1>
      <Rules />
      <Colors
        list={colors}
        activeColor={activeColor}
        activatedColor={activateColor}
      />
      <Board
        colorsSolution={colorsSolution}
        check={check}
        setColor={setColor}
        checkRow={checkRow}
        activeColor={activeColor}
        setActiveColor={setActiveColor}
        activeRow={activeRow}
        setActiveRow={setActiveRow}
        currentRow={currentRow}
        hints={hints}
        previousRow={previousRow}
        previousHints={previousHints}
      />
      <p className="message">{message}</p>
      <div className="solution colors">
        <div className={isHidden}>
          <h2>Solution: </h2>
          {solutionPegs}
          <br />
          <button className="playAgainButton" onClick={newGame}>
            Play Again?
          </button>
        </div>
        <div className={playAgain}>
          <button className="playAgainButton" onClick={newGame}>
            Play Again?
          </button>
        </div>
      </div>
    </div>
  );
};

export default Game;
