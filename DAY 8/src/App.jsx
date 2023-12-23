import { useState } from "react";
import "./styles.css";
import Footer from "./Components/Footer/Footer";

const App = () => {
  const [player1, setPlayer1] = useState({ name: "", symbol: "" });
  const [player2, setPlayer2] = useState({ name: "", symbol: "" });
  const [gameStarted, setGameStarted] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState(player1);
  const getInitialSquares = () => Array(9).fill(null);
  const [squares, setSquares] = useState(getInitialSquares);

  // Possible winning combinations
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [a, b, c] of lines) {
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }

    return null;
  };
  // Handle input change
  const handleInputChange = (e, key, player) => {
    if (player === "player1") {
      setPlayer1({ ...player1, [key]: e.target.value });
    } else {
      setPlayer2({ ...player2, [key]: e.target.value });
    }
  };
  // Switch player
  const switchPlayer = () => {
    setCurrentPlayer(currentPlayer === player1 ? player2 : player1);
  };
  // Calculate status of the game
  const calculateStatus = () => {
    const winner = calculateWinner(squares);
    const isTie = squares.every((square) => square !== null) && !winner;

    if (winner) {
      return `Winner: ${
        winner === player1.symbol ? player1.name : player2.name
      }`;
    } else if (isTie) {
      return "It's a Tie!";
    } else {
      return `Current player: ${currentPlayer.name} (${currentPlayer.symbol})`;
    }
  };
  // Handle click on square
  const handleClick = (index) => {
    if (!gameStarted || squares[index] || calculateWinner(squares)) {
      return;
    }
    const newSquares = squares.slice();
    newSquares[index] = currentPlayer.symbol;
    setSquares(newSquares);
    switchPlayer();
  };
  // Clear game board
  const clearGame = () => {
    setSquares(getInitialSquares());
    setCurrentPlayer(player1);
  };
  // Start game
  const startGame = () => {
    setGameStarted(true);
    setCurrentPlayer(player1);
  };
  // Reset game
  const resetGame = () => {
    setGameStarted(false);
    setSquares(getInitialSquares());
    setCurrentPlayer(player1);
    setPlayer1({ name: "", symbol: "" });
    setPlayer2({ name: "", symbol: "" });
  };
  // Render square component with index
  const renderSquare = (index) => (
    <div className="square" onClick={() => handleClick(index)}>
      {squares[index]}
    </div>
  );

  const status = calculateStatus();

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <div id="form">
        {!gameStarted && (
          <form className="form">
            <input
              placeholder="Enter first player name"
              className="input"
              type="text"
              value={player1.name}
              onChange={(e) => handleInputChange(e, "name", "player1")}
              required
            />
            <input
              placeholder="Enter second player name"
              className="input"
              type="text"
              value={player2.name}
              onChange={(e) => handleInputChange(e, "name", "player2")}
              required
            />
            <input
              placeholder="Enter first player Symbol"
              className="input"
              type="text"
              value={player1.symbol}
              onChange={(e) => handleInputChange(e, "symbol", "player1")}
              required
            />
            <input
              placeholder="Enter second player Symbol"
              className="input"
              type="text"
              value={player2.symbol}
              onChange={(e) => handleInputChange(e, "symbol", "player2")}
              required
            />
            <button onClick={() => startGame()}>Start Game</button>
          </form>
        )}
      </div>
      {gameStarted && <h5>{status}</h5>}
      <div id="game">
        {gameStarted && (
          <>
            <div className="board">
              {Array(9)
                .fill(null)
                .map((_, index) => renderSquare(index))}
            </div>
            <div className="buttons ">
              <div>
                <button onClick={clearGame}>Clear</button>
              </div>
              <div>
                <button onClick={resetGame}>Reset Game</button>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default App;
