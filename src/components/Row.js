import React from "react";
import Circle from "./Circle";
import CheckBox from "./CheckBox";

const Row = ({
  previousRow,
  checkRow,
  check,
  setColor,
  activeColor,
  currentRow,
  id,
  activeRow,
  hints,
  previousHints,
}) => {
  let active = "";
  if (+id.substr(4) === activeRow) {
    active = "active";
  }

  const row = +id.substr(4);
  let disabled = "disabled";
  const doNothing = () => false;

  if (activeRow === row) {
    disabled = check ? "" : "disabled";
  }

  const checking = disabled === "disabled" ? doNothing : checkRow;
  let allHints = [];
  let hintCheck = "";
  const rowsId = +id.substr(4);
  for (let i = 0; i < hints.length; i++) {
    if (rowsId === activeRow) {
      hintCheck = hints[i] === 2 ? "exact" : hints[i] === 1 ? "partial" : "";
    } else {
      for (let j = 0; j < previousHints.length; j++) {
        if (rowsId === j) {
          hintCheck =
            previousHints[j][i] === 2
              ? "exact"
              : previousHints[j][i] === 1
              ? "partial"
              : "";
        }
      }
    }
    allHints.push(
      <CheckBox
        hintCheck={hintCheck}
        key={"h_" + rowsId + i}
        id={"h_" + rowsId + i}
      />
    );
  }
  return (
    <div className={"row " + active} id={id}>
      <Circle
        setColor={setColor}
        rowId={id}
        previousRow={previousRow}
        currentRow={currentRow}
        activeColor={activeColor}
        activeRow={activeRow}
      />
      <button className={"check-button " + disabled} onClick={checking}>
        Check
      </button>
      <div className="hints">{allHints}</div>
    </div>
  );
};

export default Row;
