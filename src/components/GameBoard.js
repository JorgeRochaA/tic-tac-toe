import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//styles
import { GameBoardContainer, GameBoardOption } from "../styles/GameBoard";
import { GameH1 } from "../styles/GameH1";

//redux

import {
  setCurrentPlayerTurn,
  setCurrentGame,
  restartGame,
} from "../redux/gameSlice";
import { Button } from "../styles/Button";

export default function GameBoard() {
  const dispatch = useDispatch();
  const currentGame = useSelector((state) => state.game.currentGame);

  const currentPlayerTurn = useSelector(
    (state) => state.game.currentPlayerTurn
  );

  const currentPlayer = useSelector((state) => state.game.currentPlayer);

  useEffect(() => {
    if (currentPlayerTurn !== currentPlayer && !checkWinner(currentGame)) {
      const newGameOptions = [...currentGame];
      const emptyCells = newGameOptions
        .map((option, index) => (option === "" ? index : null))
        .filter((cell) => cell !== null);
      const randomIndex = Math.floor(Math.random() * emptyCells.length);
      setTimeout(() => {
        newGameOptions[emptyCells[randomIndex]] =
          currentPlayerTurn === "X" ? "O" : "X";
        fillBoardWithOption(emptyCells[randomIndex]);
      }, 200);
    }
  }, [currentPlayerTurn]);

  function fillBoardWithOption(index) {
    if (currentGame[index] !== "" || checkWinner(currentGame)) return;

    const newGameOptions = currentGame.map((option, i) =>
      i === index ? currentPlayerTurn : option
    );

    dispatch(setCurrentGame(newGameOptions));

    dispatch(setCurrentPlayerTurn(currentPlayerTurn === "X" ? "O" : "X"));
  }

  function checkWinner(board) {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winConditions.length; i++) {
      const [a, b, c] = winConditions[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    const isDraw = board.every((cell) => cell !== "");
    return isDraw ? "Draw" : null;
  }

  return (
    <>
      {currentGame.some((cell) => cell === "") && !checkWinner(currentGame) && (
        <GameH1>
          {currentPlayerTurn === currentPlayer ? "Your Turn" : "IA turn"}
        </GameH1>
      )}
      {checkWinner(currentGame) && (
        <>
          <GameH1>
            {checkWinner(currentGame) === "Draw"
              ? "It's a draw"
              : checkWinner(currentGame) === "X"
              ? "You win"
              : "IA wins"}
          </GameH1>
          <Button onClick={() => dispatch(restartGame())}>restart</Button>
        </>
      )}

      <GameBoardContainer>
        {currentGame.map((option, index) =>
          option ? (
            <GameBoardOption key={index}>
              <img
                src={require(`../assets/game-options/option-${option}.svg`)}
                alt={`Game option ${option}`}
              />
            </GameBoardOption>
          ) : (
            <GameBoardOption
              key={index}
              onClick={() => {
                if (currentPlayerTurn !== currentPlayer) return;
                fillBoardWithOption(index);
              }}
            ></GameBoardOption>
          )
        )}
      </GameBoardContainer>
    </>
  );
}
