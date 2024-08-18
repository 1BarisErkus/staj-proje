import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--primary-background);
  padding: 70px 0;
`;

export const NoItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--secondary);
  padding: 50px;
  color: white;
  font-size: 24px;
  font-weight: 600;
  border-radius: 10px;
  margin: 50px 0;
`;

export const TitleOrder = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

export const BasketItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
