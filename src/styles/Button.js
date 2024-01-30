import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  height: 80px;
  width: 148px;
  justify-content: center;
  align-items: center;
  border-radius: 80px;
  border: 1px solid #ececec;
  background: #fff;
  transition: 0.5s;
  img {
    width: 32px;
    height: 32px;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  //text

  color: #231a00;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 19.2px */
  letter-spacing: 1.6px;
  text-transform: uppercase;

  &.blue {
    border-radius: 56px;
    background: #005bc0;
    color: #fff;
  }
`;
