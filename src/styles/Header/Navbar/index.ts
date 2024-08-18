import styled, { css } from "styled-components";

export const CartBadge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: var(--cart-badge);
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
  border: ${(props) =>
    props.$border ? "1px solid var(--border-color)" : "none"};
  border-radius: 6px;
  cursor: pointer;
  background-color: white;
  color: var(--primary-text);
  width: 100%;
  height: 100%;
  gap: 8px;
  transition: all 0.3s ease;
  position: relative;

  ${(props) =>
    props.$primary &&
    css`
      background-color: var(--primary);
      color: #var(--old-text-color);
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
