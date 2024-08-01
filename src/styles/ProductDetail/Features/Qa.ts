import styled from "styled-components";

export const HeadWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  background-color: #2855ac;
  color: white;
  border: none;
  padding: 10px 140px;
  border-radius: 1.25rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;

  &:hover {
    background-color: #3a6ccd;
    color: #fff;
  }
`;

export const Input = styled.input`
  padding: 15px 20px;
  border: none;
  border-radius: 0.3rem;
  font-size: 0.9rem;
  outline: none;
  background-color: #f3f5f7;
`;

export const CardContainer = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 30px 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Question = styled.div`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
`;

export const AnswerContainer = styled.div`
  padding-top: 10px;
  border-top: 1px solid #e0e0e0;
`;

export const AnswerHeader = styled.div`
  font-size: 12px;
  margin: 10px 0;
  color: #666;
  letter-spacing: 1.3px;

  span {
    font-weight: bold;
    color: #2855ac;
  }
`;

export const Answer = styled.div`
  font-size: 16px;
  color: #666;
`;

export const QuestionText = styled.div`
  font-size: 14px;
  display: flex;
  gap: 10px;
  color: #666;
  margin-bottom: 10px;
`;
