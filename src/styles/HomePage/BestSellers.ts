import styled from "styled-components";

export const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding-top: 20px;
  border-top: 1px solid gainsboro;
`;

export const CategoryCard = styled.div<{ $active?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  height: 100px;
  width: 100px;
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

export const CategoryImage = styled.div`
  width: 20px;
  height: 30px;
  position: relative;
`;

export const CategoryName = styled.span`
  font-size: 15px;
`;
