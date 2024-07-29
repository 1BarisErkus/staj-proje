import React, { useState } from "react";
import {
  HiddenCheckbox,
  Label,
  Slider,
  Switch,
  SwitchContainer,
} from "@/styles/Category/SwitchButton";

const SwitchButton = ({ title }: { title: string }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
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
