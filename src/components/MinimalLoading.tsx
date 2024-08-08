import { FC } from "react";
import dynamic from "next/dynamic";

const DotLottieReact = dynamic(
  () =>
    import("@lottiefiles/dotlottie-react").then((mod) => mod.DotLottieReact),
  { ssr: false }
);

type MinimalLoadingProps = {
  size?: number;
};

const MinimalLoading: FC<MinimalLoadingProps> = ({ size }) => {
  return (
    <DotLottieReact
      src="/animations/minimal-loading.json"
      loop
      autoplay
      style={{ width: size ? size : "30px", height: size ? size : "30px" }}
    />
  );
};

export default MinimalLoading;
