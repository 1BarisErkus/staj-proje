import styled, { css } from "styled-components";

export const CartBadge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #ff6f61;
  color: white;
  border-radius: 50%;
  border: 4px solid white;
  font-size: 1rem;
  position: absolute;
  right: -28px;
`;

export const Button = styled.button<{
  $primary?: boolean;
  $withicon?: boolean;
  $border?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: 500;
  border: ${(props) => (props.$border ? "1px solid #e9ecef" : "none")};
  border-radius: 6px;
  cursor: pointer;
  background-color: white;
  color: #343a40;
  width: 100%;
  height: 100%;
  gap: 8px;
  transition: all 0.3s ease;
  position: relative;

  ${(props) =>
    props.$primary &&
    css`
      background-color: #ffca00;
      color: #343a40;
    `}

  ${(props) =>
    props.$withicon &&
    css`
      padding-left: 14px;
      padding-right: 14px;

      span {
        margin-right: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `}
`;
