import dynamic from "next/dynamic";

const DotLottieReact = dynamic(
  () =>
    import("@lottiefiles/dotlottie-react").then((mod) => mod.DotLottieReact),
  { ssr: false }
);

const NotFound = () => {
  return <DotLottieReact src="/animations/not-found.json" loop autoplay />;
};

export default NotFound;
