import React from "react";
import Row from "./Row";

const Board = ({
  previousRow,
  checkRow,
  check,
  setColor,
  currentRow,
  activeColor,
  setActiveColor,
  activeRow,
  hints,
  previousHints,
}) => {
  const rows = [];
  for (let i = 0; i < 10; i++) {
    rows.push(
      <Row
        key={"row_" + i}
        id={"row_" + i}
        checkRow={checkRow}
        check={check}
        setColor={setColor}
        hints={hints}
        previousHints={previousHints}
        currentRow={currentRow}
        activeColor={activeColor}
        setActiveColor={setActiveColor}
        activeRow={activeRow}
        previousRow={previousRow}
      />
    );
  }

  return <div className="board">{rows}</div>;
};

export default Board;
