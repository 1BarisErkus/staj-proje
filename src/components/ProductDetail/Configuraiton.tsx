import React from "react";
import { ConfigurationWrapper } from "@/styles/ProductDetail";
import SelectBox from "./SelectBox";
import { Configuration } from "@/common/types";

interface ConfigurationProps {
  configuration: Configuration[];
  setSelectedColor: React.Dispatch<React.SetStateAction<string | null>>;
  setSelectedMemory: React.Dispatch<React.SetStateAction<string | null>>;
}

const Configuraiton: React.FC<ConfigurationProps> = ({
  configuration,
  setSelectedColor,
  setSelectedMemory,
}) => {
  return (
    <ConfigurationWrapper>
      <SelectBox
        title="RENK"
        configuration={configuration[0]}
        setSelectedColor={setSelectedColor}
      />
      {configuration[1] && (
        <SelectBox
          title="DAHİLİ HAFIZA"
          configuration={configuration[1]}
          setSelectedMemory={setSelectedMemory}
        />
      )}
    </ConfigurationWrapper>
  );
};

export default Configuraiton;
