import dynamic from "next/dynamic";

const DotLottieReact = dynamic(
  () =>
    import("@lottiefiles/dotlottie-react").then((mod) => mod.DotLottieReact),
  { ssr: false }
);

const Loading = () => {
  return (
    <DotLottieReact src="/animations/default-loading.json" loop autoplay />
  );
};

export default Loading;
