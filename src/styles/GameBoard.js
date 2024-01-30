import styled, { css } from "styled-components";

const fadeInAnimation = css`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const GameBoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
  width: 450px;
  max-width: 90%;
  margin: 0 auto;
  aspect-ratio: 1 / 1;
  margin: 58px;

  @media (max-width: 620px) {
    gap: 5px;
  }
`;

export const GameBoardOption = styled.div`
  ${fadeInAnimation}
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background-color: white;
  border-radius: 16px;
  cursor: pointer;

  img {
    width: 50%;
    height: 50%;
    object-fit: contain;
    animation: fadeIn 0.5s ease;
  }
`;
