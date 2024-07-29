import styled from "styled-components";

export const FilterSection = styled.div`
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
`;

export const FilterOption = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  gap: 10px;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
`;

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledCheckbox = styled.div<{ checked: boolean }>`
  display: inline-block;
  width: 24px;
  height: 24px;
  background: ${(props) => (props.checked ? "yellow" : "white")};
  border: 2px solid #ccc;
  border-radius: 4px;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }

  ${HiddenCheckbox}:checked + & {
    background: yellow;
  }

  &:after {
    content: ${(props) => (props.checked ? "'✔'" : "''")};
    display: block;
    text-align: center;
    line-height: 20px;
    color: black;
    font-weight: bold;
    font-size: 18px;
  }
`;

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;
