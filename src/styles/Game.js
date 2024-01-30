import styled from "styled-components";

export const GameContainer = styled.section`
  height: fit-content;
  min-height: calc(100vh - 58px);
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    max-width: 100%;
  }
`;

export const GameHeader = styled.header`
  display: inline-flex;
  position: relative;
  z-index: 2;
  height: fit-content;
  min-height: 58px;
  width: 268px;
  max-width: 90%;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 0 0 16px 16px;
  background-color: #735c00;
  color: #ffffff;
  text-align: center;
  font-family: "Inter", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
`;

export const UserOptionsContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 24px;
  margin-bottom: 58px;

  @media (max-width: 515px) {
    flex-direction: column;
  }
`;
