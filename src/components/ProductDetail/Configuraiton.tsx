import { Dispatch, FC, SetStateAction } from "react";
import { Configuration } from "@/common/types";
import { ConfigurationWrapper } from "@/styles/ProductDetail";
import SelectBox from "./SelectBox";

type ConfigurationProps = {
  configuration: Configuration[];
  setSelectedColor: Dispatch<SetStateAction<string | null>>;
  setSelectedMemory: Dispatch<SetStateAction<string | null>>;
};

const Configuraiton: FC<ConfigurationProps> = ({
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
