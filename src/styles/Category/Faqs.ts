import styled from "styled-components";

export const FaqContainer = styled.div`
  padding: 20px;
`;

export const AccordionItem = styled.div`
  margin-bottom: 10px;
  border-radius: 4px;
  overflow: hidden;
`;

export const AccordionButton = styled.button`
  width: 100%;
  padding: 15px;
  text-align: left;
  border: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
  background-color: transparent;

  &:focus {
    outline: none;
  }
`;

export const AccordionContent = styled.div<{ $isopen: boolean }>`
  max-height: ${({ $isopen }) => ($isopen ? "500px" : "0")};
  overflow: hidden;
  background-color: transparent;
  transition: max-height 0.3s ease;
  padding: ${({ $isopen }) => ($isopen ? "15px" : "0 15px")};
  background-color: #f1f1f1;
`;

export const Answer = styled.p`
  margin: 0;
  font-size: 16px;
`;
