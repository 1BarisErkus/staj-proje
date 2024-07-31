import React from "react";
import { ConfigurationWrapper } from "@/styles/ProductDetail";
import SelectBox from "./SelectBox";

interface ConfigurationProps {
  configuration: { title: string; options: string[] }[];
}

const Configuraiton: React.FC<ConfigurationProps> = ({ configuration }) => {
  return (
    <ConfigurationWrapper>
      <SelectBox title="RENK" configuration={configuration[0]} />
      {configuration[1] && (
        <SelectBox title="DAHİLİ HAFIZA" configuration={configuration[1]} />
      )}
    </ConfigurationWrapper>
  );
};

export default Configuraiton;
