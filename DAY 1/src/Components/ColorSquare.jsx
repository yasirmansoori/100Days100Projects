import { useState } from "react";
import styles from "../Styles/styles.module.css";

const ColorSquare = () => {
  const [color, setColor] = useState("#1d1d1d");
  // This function sets the color of the square to a random color when the mouse enters the square.
  const handleMouseOver = () => {
    const newColor = getRandomColor();
    setColor(newColor);
  };
  // This function sets the color of the square back to the default color when the mouse leaves the square.
  const handleMouseOut = () => {
    setColor("#1d1d1d");
  };

  // This function returns a random color from the array below each time it is called.
  const getRandomColor = () => {
    const colors = [
      "#e74c3c",
      "#8e44ad",
      "#3498db",
      "#e67e22",
      "#2ecc71",
      "#3498db",
      "#16a085",
      "#f39c12",
      "#d35400",
      "#c0392b",
      "#7f8c8d",
      "#bdc3c7",
      "#34495e",
      "#2c3e50",
      "#95a5a6",
      "#f1c40f",
      "#9b59b6",
      "#1abc9c",
      "#3498db",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div
      className={styles.square}
      style={{
        background: color,
        boxShadow: `0 0 2px ${color}, 0 0 10px ${color}`,
      }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    ></div>
  );
};

export default ColorSquare;
