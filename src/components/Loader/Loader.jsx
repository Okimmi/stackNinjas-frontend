import Lottie from "lottie-react";

import dropletsAnimData from "../../images/animation/droplets.json";
import { DivSuspenseLoaderWrapper } from "./Loader.styled";

const Loader = () => {
  return (
    <DivSuspenseLoaderWrapper>
      <Lottie animationData={dropletsAnimData} loop />
    </DivSuspenseLoaderWrapper>
  );
};

export default Loader;
