import { LiquidMetal } from "@paper-design/shaders-react";

export default function Crest({ size = "100%", speed = 0.3 }) {
  return (
    <LiquidMetal
      image="/crest.svg"
      colorTint="#ffffff"
      colorBack="#00000000"
      repetition={4}
      softness={0.4}
      shiftRed={0.15}
      shiftBlue={0.15}
      distortion={0.15}
      contour={0.7}
      angle={180}
      speed={speed}
      style={{ width: size, height: size }}
    />
  );
}
