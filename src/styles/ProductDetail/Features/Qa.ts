import styled from "styled-components";

export const HeadWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  background-color: var(--secondary);
  color: var(--secondary-text);
  border: none;
  padding: 10px 140px;
  border-radius: 1.25rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;

  &:hover {
    background-color: var(--secondary-hover);
  }
`;

export const Input = styled.input`
  padding: 15px 20px;
  border: 1px solid var(--border-color);
  border-radius: 0.3rem;
  font-size: 0.9rem;
  outline: none;
  background-color: var(--secondary-background);
`;

export const CardContainer = styled.div`
  background: var(--primary-background);
  border-radius: 10px;
  padding: 30px 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Question = styled.div`
  font-size: 16px;
  color: var(--fourth-text);
  margin-bottom: 20px;
`;

export const AnswerContainer = styled.div`
  padding-top: 10px;
  border-top: 1px solid var(--border-color);
`;

export const AnswerHeader = styled.div`
  font-size: 12px;
  margin: 10px 0;
  color: var(--fourth-text);
  letter-spacing: 1.3px;

  span {
    font-weight: bold;
    color: var(--secondary);
  }
`;

export const Answer = styled.div`
  font-size: 16px;
  color: var(--fourth-text);
`;

export const QuestionText = styled.div`
  font-size: 14px;
  display: flex;
  gap: 10px;
  color: var(--fourth-text);
  margin-bottom: 10px;
`;
