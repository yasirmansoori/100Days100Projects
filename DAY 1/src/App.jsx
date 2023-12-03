import { useState } from "react";
import ColorSquare from "./Components/ColorSquare";
import styles from "./Styles/styles.module.css";
import Footer from "./Components/Footer/Footer";

const App = () => {
  const [numSquares, setNumSquares] = useState(400);
  const [bgcolor, setBgcolor] = useState("#ddd2d2");

  // The handleInputChange function is called whenever the value of the input changes. It sets the value of numSquares to the value of the input. If the value of the input is not a number, it sets the value of numSquares to 0. If the value of the input is greater than or equal to 561, it alerts the user to limit the number of squares to 920.
  const handleInputChange = (e) => {
    const newNumSquares = parseInt(e.target.value, 10) || 0;

    if (newNumSquares >= 921) {
      alert("For better Visualization please Limit the squares upto 920");
    } else {
      setNumSquares(newNumSquares);
    }
  };
  // The handleColor function is called whenever the value of the color input changes. It sets the value of bgcolor to the value of the input.
  const handleColor = (e) => {
    setBgcolor(e.target.value);
  };

  // The renderSquares function returns an array of ColorSquare components. The length of the array is equal to the value of numSquares.
  const renderSquares = () => {
    const squares = [];
    for (let i = 0; i < numSquares; i++) {
      squares.push(<ColorSquare key={i} />);
    }
    return squares;
  };

  return (
    <>
      <div className={styles.outer} style={{ backgroundColor: bgcolor }}>
        <div
          className={styles.container}
          id="container"
          style={{ maxWidth: numSquares > 480 ? "800px" : "400px" }}
        >
          {renderSquares()}
        </div>
        <div className={styles.controls}>
          <div className={styles.card}>
            <div className={styles.tools}>
              <div className={styles.circle}>
                <span className={`${styles.red} ${styles.box}`}></span>
              </div>
              <div className={styles.circle}>
                <span className={`${styles.yellow} ${styles.box}`}></span>
              </div>
              <div className={styles.circle}>
                <span className={`${styles.green} ${styles.box}`}></span>
              </div>
            </div>
            <div className={styles.card__content}>
              <h1>Controls</h1>
              <label htmlFor="numSquares">Number of Squares:</label>
              <input
                type="number"
                id="numSquares"
                value={numSquares}
                onChange={handleInputChange}
              />
              <label htmlFor="color">Background:</label>
              <input type="color" id="color" onChange={handleColor} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
