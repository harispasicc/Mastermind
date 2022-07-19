import React from "react";
import Peg from "./Peg";

const Circle = ({
  previousRow,
  rowId,
  currentRow,
  activeColor,
  activeRow,
  setColor,
}) => {
  const rowsId = rowId.substr(4);

  const Pegs = [];
  for (let i = 0; i < 4; i++) {
    Pegs.push(
      <Peg
        key={"p" + rowsId + "_" + i}
        pegId={"p" + rowsId + "_" + i}
        setColor={setColor}
        currentRow={currentRow}
        activeColor={activeColor}
        activeRow={activeRow}
        previousRow={previousRow}
      ></Peg>
    );
  }

  return <div className="circles">{Pegs}</div>;
};

export default Circle;
