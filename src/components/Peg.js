import React from "react";

const Peg = ({
  setColor,
  activeColor,
  currentRow,
  activeRow,
  pegId,
  previousRow,
}) => {
  const pegsId = +pegId.substr(pegId.indexOf("_") + 1);
  const rowId = +pegId.substr(1, pegId.indexOf("_") - 1);

  let clase = "";
  if (activeRow === rowId) {
    clase = currentRow[pegsId];
  } else {
    for (let i in previousRow) {
      if (+i === +rowId) clase = previousRow[rowId][pegsId];
    }
  }

  return (
    <span
      className={"peg " + clase}
      id={pegId}
      onClick={() => setColor(activeColor, pegId)}
    ></span>
  );
};

export default Peg;
