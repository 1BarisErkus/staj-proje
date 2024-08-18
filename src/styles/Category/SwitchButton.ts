import styled from "styled-components";

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Label = styled.label`
  font-size: 18px;
  color: var(--old-text-color);
  font-weight: 600;
  margin-right: 8px;
`;

export const Switch = styled.div`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 24px;
`;

export const Slider = styled.span<{ checked: boolean }>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) =>
    props.checked ? "var(--primary)" : "var(--border-color)"};
  transition: 0.4s;
  border-radius: 40px;

  &:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color: var(--primary-background);
    transition: 0.4s;
    border-radius: 50%;
    transform: ${(props) =>
      props.checked ? "translateX(16px)" : "translateX(0)"};
  }
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const RadioButton = styled.input.attrs({ type: "radio" })`
  margin-right: 8px;
  width: 18px;
  height: 18px;
  cursor: pointer;
  appearance: none;
  border: 1px solid var(--border-color);
  border-radius: 50%;
  position: relative;
  outline: none;

  &:checked::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10px;
    height: 10px;
    background-color: var(--primary);
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }
`;
