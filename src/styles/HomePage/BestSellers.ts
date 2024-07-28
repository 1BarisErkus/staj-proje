import styled from "styled-components";

export const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

export const CategoryCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100px;
  width: 100px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    span {
      color: #2855ac;
      font-weight: bold;
    }
  }
`;

export const CategoryImage = styled.div`
  width: 30px;
  height: 30px;
  margin-bottom: 10px;
  position: relative;
`;

export const CategoryName = styled.span`
  font-size: 15px;
  margin-top: 10px;
`;
