import styled from "styled-components";

export const CategoryCard = styled.div<{ $active?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  width: 100px;
  height: 90px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    border-bottom: 1px solid #2855ac;
    span {
      color: #2855ac;
      font-weight: bold;
    }
  }

  ${(props) =>
    props.$active &&
    `
    border-bottom: 1px solid #2855ac;
    span {
      color: #2855ac;
      font-weight: bold;
      }
    `}
`;

export const CategoryName = styled.span`
  font-size: 14px;
`;
