import styled from "styled-components";

export const Option = styled.div`
  display: inline-block;
  width: 37px;
  height: 37px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 5px;
  border: 1px solid gray;
  cursor: pointer;
  position: relative;
`;

export const Tick = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${({ color }) => (color === "#FFFFFF" ? "black" : "white")};
`;
