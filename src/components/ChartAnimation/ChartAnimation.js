import React from "react";
import Lottie from "react-lottie";
import chartAnim from "../../assets/animation/chart-anim.json";

const ChartAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: chartAnim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} height={400} width={400} />;
};

export default ChartAnimation;
