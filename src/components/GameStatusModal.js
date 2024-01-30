import { Modal } from "flowbite-react";

//redux
import { useDispatch } from "react-redux";
import { restartGame } from "../redux/gameSlice";

//assets
import win from "../assets/game-statuses/win.svg";
import draw from "../assets/game-statuses/draw.png";
import lose from "../assets/game-statuses/lose.svg";

//styles
import { GameH3 } from "../styles/GameH3";
import { GameParagraph } from "../styles/GameParagraph";
import { Button } from "../styles/Button";
import { GameStatusModalContainer } from "../styles/GameStatusModal";

export default function GameStatusModal({ gameStatus }) {
  const dispatch = useDispatch();
  const winModal = (
    <GameStatusModalContainer className="mt-7 mb-7">
      <img className="mt-7" src={win} alt="You win" />
      <GameH3>You Won!</GameH3>
      <GameParagraph>
        Congrats on being the undisputed champion of pressing buttons like a
        pro.
      </GameParagraph>
      <Button className="blue" onClick={() => dispatch(restartGame())}>
        Restart
      </Button>
    </GameStatusModalContainer>
  );

  const drawModal = (
    <GameStatusModalContainer className="mt-7 mb-7">
      <img className="mt-7" src={draw} alt="It's a Draw" />
      <GameH3>It’s a Draw!</GameH3>
      <GameParagraph>
        Congrats to both of you for equally excelling in the art of not winning.
      </GameParagraph>
      <Button className="blue" onClick={() => dispatch(restartGame())}>
        Replay
      </Button>
    </GameStatusModalContainer>
  );

  const loseModal = (
    <GameStatusModalContainer className="mt-7 mb-7">
      <img className="" src={lose} alt="You Lose" />
      <GameH3>You Lose!</GameH3>
      <GameParagraph>
        Oh no! It looks like you lose this time. But hey, every champion needs a
        break to plan their next win!
      </GameParagraph>
      <Button className="blue" onClick={() => dispatch(restartGame())}>
        Replay
      </Button>
    </GameStatusModalContainer>
  );

  return (
    <>
      <Modal show={true} size="lg" popup>
        <Modal.Body>{gameStatus === "You win" && winModal}</Modal.Body>
        <Modal.Body>{gameStatus === "It's a draw" && drawModal}</Modal.Body>
        <Modal.Body>{gameStatus === "IA wins" && loseModal}</Modal.Body>
      </Modal>
    </>
  );
}
