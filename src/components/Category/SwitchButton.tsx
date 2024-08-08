import { FC, useState } from "react";
import {
  HiddenCheckbox,
  Label,
  Slider,
  Switch,
  SwitchContainer,
} from "@/styles/Category/SwitchButton";

type SwitchButtonProps = {
  title: string;
  handleChange: () => void;
};

const SwitchButton: FC<SwitchButtonProps> = ({ title, handleChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    handleChange();
  };

  return (
    <SwitchContainer>
      <Label>{title}</Label>
      <Switch onClick={handleToggle}>
        <HiddenCheckbox checked={isChecked} onChange={handleToggle} />
        <Slider checked={isChecked} />
      </Switch>
    </SwitchContainer>
  );
};

export default SwitchButton;
