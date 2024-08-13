import Link from "next/link";
import styled from "styled-components";

type ExtraContainerProps = {
  $hide?: boolean;
};

export const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  width: 100%;
  margin: 0.5rem 0;
  border: 1px solid #ccc;
  width: 100%;
`;

export const InputSectionContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 1rem;
  align-items: center;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Input = styled.input`
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  padding: 0.5rem;
  margin: 0.5rem 0;
  font-size: 1rem;
  border-radius: 4px;
`;

export const Error = styled.span`
  color: red;
  font-size: 0.8rem;
`;

export const Description = styled.textarea`
  padding: 0.5rem;
  margin: 0.5rem 0;
  font-size: 1rem;
  width: 100%;
`;

export const Dropdown = styled.select`
  padding: 0.5rem;
  margin: 0.5rem 0;
  font-size: 1rem;
  width: 100%;
  background-color: transparent;
  border: 1px solid #ccc;
  width: 300px;
`;

export const DropdownOption = styled.option`
  padding: 0.5rem;
  margin: 0.5rem;
  font-size: 1rem;
  width: 100%;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  height: 2.5rem;
  margin: 0.5rem;
  font-size: 1rem;
  border: none;
  background-color: #ffca00;
  border-radius: 2rem;
  cursor: pointer;
`;

export const ExtraContainer = styled.div<ExtraContainerProps>`
  display: flex;
  gap: 1rem;
  align-items: center;

  ${({ $hide }) => $hide && "display: none;"}
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const DeleteLink = styled(Link)`
  color: red;
  font-size: 1rem;
  text-decoration: none;
  margin: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
`;

export const DeleteProductCardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  width: 300px;
`;

export const DeleteButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  background-color: red;
  border-radius: 2rem;
  cursor: pointer;
  color: white;
`;

export const DeleteCardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
`;
