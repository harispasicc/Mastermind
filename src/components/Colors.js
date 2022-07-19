import React from "react";

const Colors = ({ list, activeColor, activatedColor }) => {
  const allColors = list.map(color => {
    const active = color === activeColor ? "active" : "";

    return (
      <div
        className={"color-holder " + color + " " + active}
        key={color}
        onClick={() => activatedColor(color)}
      ></div>
    );
  });

  return <div className="colors">{allColors}</div>;
};

export default Colors;
