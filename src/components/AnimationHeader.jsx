import Lottie from "lottie-react";
import animationData from "../assets/developer skills.json";

function AnimationHeader() {
  return (
    <div className="header__animation">
      <Lottie animationData={animationData} loop autoplay />
    </div>
  );
}

export default AnimationHeader;
