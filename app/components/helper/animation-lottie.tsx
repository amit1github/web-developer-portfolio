"use client";

import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

interface AnimationLottieProps {
  animationPath: any;
  width?: string;
}

const AnimationLottie = ({ animationPath, width }: AnimationLottieProps) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: width || '95%',
    }
  };

  return (
    <Lottie {...defaultOptions} />
  );
};

export default AnimationLottie;