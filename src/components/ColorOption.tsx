import { Option, Tick } from "@/styles/ColorOption";

const ColorOption = ({
  color,
  selected,
}: {
  color: string;
  selected: boolean;
}) => {
  return (
    <Option color={color}>
      {selected && <Tick color={color}>&#10004;</Tick>}
    </Option>
  );
};

export default ColorOption;
