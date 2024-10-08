import styled, { keyframes, css } from "styled-components";

type CardWrapperProps = {
  size?: string;
  $comparemode?: boolean;
  $iscompareitem: boolean | undefined;
};

type SingleBadgeWrapperProps = {
  type?: string;
};

const shake = keyframes`
  0%, 100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(5px);
  }
  75% {
    transform: translateX(-3px);
  }
`;

export const CardWrapper = styled.div<CardWrapperProps>`
  position: relative;
  width: 280px;
  min-height: 470px;
  padding: 16px;
  border: none;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 2px solid white;

  ${({ size }) =>
    size === "small" &&
    `
    width: 160px;
    min-height: 350px;
    `}

  ${({ $iscompareitem }) =>
    $iscompareitem &&
    `
    border: 5px solid var(--primary);
    `}

    ${({ $comparemode }) =>
    $comparemode &&
    css`
      animation: ${shake} 1.5s ease-in-out infinite;
    `}

  &:hover {
    ${(props) =>
      props.$comparemode
        ? `
            cursor: pointer;
            box-shadow: 0 0 10px var(--primary-hover);
            transform: scale(1.05);
            background-color: var(--primary);
          `
        : `
          border: 2px solid var(--primary);
        `}
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 16px;
  }
`;

export const ProductName = styled.h2<{ size?: string }>`
  font-size: 1.1rem;
  font-weight: bold;
  color: var(--fourth-text);
  margin: 16px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${({ size }) =>
    size === "small" &&
    `
    font-size: 0.8rem;
    min-height: 30px;
    max-width: 100px;
    word-wrap: break-word;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    `}
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Price = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  color: var(--secondary);
  margin-top: 5px;
  border-top: 1px solid var(--border-color);
  padding-top: 10px;
`;

export const Discount = styled.p`
  font-size: 0.7rem;
  margin-top: 5px;
  font-weight: 600;
  color: var(--your-bill);
`;

export const DiscountlessAmount = styled.span`
  text-decoration: line-through;
  color: var(--fourth-text);
`;

export const MinPrice = styled.p`
  font-size: 0.65rem;
  font-weight: bold;
  color: var(--rating);
`;

export const BadgeWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  height: 30px;
`;

export const Badge = styled.span`
  background-color: ${(props) =>
    props.title?.includes("Peşin")
      ? "var(--third-background)"
      : props.title?.includes("Kargo")
      ? "var(--secondary-background)"
      : props.title?.includes("Hızlı")
      ? "var(--primary)"
      : "var(--rating)"};
  color: #333;
  border-radius: 5px;
  padding: 4px 8px;
  font-size: 0.55rem;
  margin-right: 8px;
  display: flex;
  max-width: 50px;
`;

export const LikeIconWrapper = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2;
  cursor: pointer;
`;

export const SingleBadgeWrapper = styled.div<SingleBadgeWrapperProps>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: ${(props) =>
    props.type === "bestSeller" ? "var(--primary)" : "var(--rating)"};
  color: white;
  padding: 4px 8px;
  border-end-end-radius: 10px;
  font-size: 0.7rem;
  font-weight: 600;
`;
