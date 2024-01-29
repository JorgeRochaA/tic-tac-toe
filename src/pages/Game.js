import React, { useState } from "react";
import {
  GameContainer,
  GameHeader,
  UserOptionsContainer,
} from "../styles/Game";

import { GameH1 } from "../styles/GameH1";

import { Button } from "../styles/Button";

import logo2 from "../assets/logo/logo-2.png";
import optionX from "../assets/game-options/option-x.svg";
import optionO from "../assets/game-options/option-o.svg";

export default function Game() {
  const [currentStep, setCurrentStep] = useState(5);

  function startGame() {
    setCurrentStep(2);
  }

  function storeDifficulty() {
    // 1 - easy
    // 2 - medium
    // 3 - hard
    setCurrentStep(3);
  }

  function storePlayerDecision() {
    // 1 - player 1
    // 2 - player 2
    setCurrentStep(4);
  }

  function storeWhoStartTheGame() {
    // 1 - player 1
    // 2 - player 2
    setCurrentStep(5);
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
        <Button onClick={storeDifficulty}>Easy</Button>
        <Button onClick={storeDifficulty}>Medium</Button>
        <Button onClick={storeDifficulty}>Hard</Button>
      </UserOptionsContainer>
    </>
  );

  const step3 = (
    <>
      <GameH1>Please choose your symbol for the game</GameH1>
      <UserOptionsContainer>
        <Button onClick={storePlayerDecision}>
          <img src={optionX} alt="x option" />
        </Button>
        <Button onClick={storePlayerDecision}>
          <img src={optionO} alt="o option" />
        </Button>
      </UserOptionsContainer>
    </>
  );

  const step4 = (
    <>
      <GameH1>Who is playing first?</GameH1>
      <UserOptionsContainer>
        <Button onClick={storeWhoStartTheGame}>Me</Button>
        <Button onClick={storeWhoStartTheGame}>IA</Button>
      </UserOptionsContainer>
    </>
  );

  return (
    <>
      <GameHeader>Tic Tac Toe</GameHeader>
      <GameContainer>
        <img src={logo2} alt="logo 2" />

        {currentStep === 1 && step1}
        {currentStep === 2 && step2}
        {currentStep === 3 && step3}
        {currentStep === 4 && step4}
        {currentStep === 5 && <GameH1>Game started</GameH1>}
      </GameContainer>
    </>
  );
}
