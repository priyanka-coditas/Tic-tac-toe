import React, { useState } from "react";
import Board from "./Board";
import giphy from "../giphy.gif";
import "../styles.css";
import { calculateWinner } from "../helpers";
const styles = {
  textAlign: "center",
  margin: "auto",
  width: " 50%",
};

const gifStyle = {};
const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, serXisNext] = useState(true);
  const winner = calculateWinner(board);
  const handleClick = (i) => {
    const boardCopy = [...board];

    //if user click an occupies square or if game is won , return
    if (winner || boardCopy[i]) return;
    //put X or O on clicked square
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    serXisNext(!xIsNext);
  };

  const jumpTo = () => {};

  const renderMoves = () => (
    <button className="start-btn" onClick={() => setBoard(Array(9).fill(null))}>
      Start Game
    </button>
  );

  return (
    <>
      <Board squares={board} onClick={handleClick} />;
      <div style={styles}>
        <p className={winner ? "winner" : ""}>
          {winner
            ? "Winner: " + winner
            : "Next Player: " + (xIsNext ? "X" : "O")}
        </p>
        {renderMoves()}
      </div>
      <div className="winning-logo">
        {winner ? <img className="logo" src={giphy} alt="logo" /> : null}
      </div>
    </>
  );
};
export default Game;
