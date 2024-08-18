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
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 2px;
  border-bottom: 1px solid var(--border-color);
  background-color: transparent;

  &:focus {
    outline: none;
  }
`;

export const AccordionContent = styled.div<{ $isopen: boolean }>`
  transform: ${({ $isopen }) => ($isopen ? "scaleY(1)" : "scaleY(0)")};
  transform-origin: top;
  transition: transform 0.3s ease;
  height: auto;
  background-color: var(--secondary-background);
  padding: ${({ $isopen }) => ($isopen ? "15px" : "0 15px")};
  overflow: hidden;
`;

export const Answer = styled.p`
  margin: 0;
  font-size: 16px;
`;
