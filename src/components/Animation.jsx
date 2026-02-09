import Lottie from "lottie-react";
import animationData from "../assets/isometric-animation.json";

function Animation() {
  return (
    <div style={{ width: 100, height:100, margin: "0 auto" }}>
      <Lottie animationData={animationData} loop autoplay />
    </div>
  );
}

export default Animation;
