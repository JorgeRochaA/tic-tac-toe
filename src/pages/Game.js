import React from "react";
import { useSelector, useDispatch } from "react-redux";
//styles
import {
  GameContainer,
  GameHeader,
  UserOptionsContainer,
} from "../styles/Game";

import { GameH1 } from "../styles/GameH1";
import { Button } from "../styles/Button";

//components
import GameBoard from "../components/GameBoard";

//assets
import logo2 from "../assets/logo/logo-2.png";
import optionX from "../assets/game-options/option-X.svg";
import optionO from "../assets/game-options/option-O.svg";

//redux

import {
  setCurrentStep,
  setCurrentDifficulty,
  setCurrentPlayer,
  setWhoStartTheGame,
} from "../redux/gameSlice";

export default function Game() {
  const dispatch = useDispatch();

  const currentStep = useSelector((state) => state.game.currentStep);

  function startGame() {
    dispatch(setCurrentStep(2));
  }

  function storeDifficulty(difficulty) {
    dispatch(setCurrentDifficulty(difficulty));
  }

  function storePlayerDecision(playerDecision) {
    dispatch(setCurrentPlayer(playerDecision));
  }

  function storeWhoStartTheGame(option) {
    dispatch(setWhoStartTheGame(option));
  }

  const step1 = (
    <>
      <GameH1>Welcome to the game</GameH1>
      <UserOptionsContainer>
        <Button onClick={startGame}>Start</Button>
      </UserOptionsContainer>
    </>
  );

  const step2 = (
    <>
      <GameH1>Select the difficulty</GameH1>
      <UserOptionsContainer>
        <Button onClick={() => storeDifficulty("easy")}>Easy</Button>
        <Button onClick={() => storeDifficulty("medium")}>Medium</Button>
        <Button onClick={() => storeDifficulty("hard")}>Hard</Button>
      </UserOptionsContainer>
    </>
  );

  const step3 = (
    <>
      <GameH1>Please choose your symbol for the game</GameH1>
      <UserOptionsContainer>
        <Button onClick={() => storePlayerDecision("X")}>
          <img src={optionX} alt="x option" />
        </Button>
        <Button onClick={() => storePlayerDecision("O")}>
          <img src={optionO} alt="o option" />
        </Button>
      </UserOptionsContainer>
    </>
  );

  const step4 = (
    <>
      <GameH1>Who is playing first?</GameH1>
      <UserOptionsContainer>
        <Button onClick={() => storeWhoStartTheGame("ME")}>Me</Button>
        <Button onClick={() => storeWhoStartTheGame("IA")}>IA</Button>
      </UserOptionsContainer>
    </>
  );

  return (
    <>
      <GameHeader>Tic Tac Toe</GameHeader>
      <GameContainer>
        {currentStep < 5 && <img src={logo2} alt="logo" />}
        {currentStep === 1 && step1}
        {currentStep === 2 && step2}
        {currentStep === 3 && step3}
        {currentStep === 4 && step4}
        {currentStep === 5 && <GameBoard></GameBoard>}
      </GameContainer>
    </>
  );
}
