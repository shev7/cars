import { useEffect, useRef, useState } from "react";
import img from "./assets/img_1.jpg";
import img_2 from "./assets/img_2.jpg";
import { useMobile } from "@utils";

export const BookScreen: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isTransitionActive, setIsTransitionActive] = useState(false);
  const { mobileWidth } = useMobile();

  const height = mobileWidth > 1000 ? 8000 : 6000;
  const imgHeight = Math.min(window.innerHeight, window.innerWidth) * 0.8;
  const imgWidth = imgHeight * 0.7;

  const scrollHandler = () => {
    const offset = ref.current?.parentElement?.parentElement?.offsetTop || 0;
    const angle = 0.05 * (window.scrollY - offset);
    if (angle < 0) {
      setIsActive(false);
      setIsTransitionActive(false);
      return;
    }

    if (angle > 180) {
      setIsActive(false);
      setIsTransitionActive(false);
      return;
    }

    if (!isActive) setIsActive(true);

    if (!isTransitionActive && angle > 5 && angle < 175) {
      setIsTransitionActive(true);
    }

    setRotate(angle);
  };

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <div
      className="overflow-clip bg-black"
      style={{
        height: height,
      }}
    >
      <div className="sticky left-0 top-1/2 flex -translate-y-1/2 justify-center text-white">
        <div className="p-32 perspective-[2000px]" ref={ref}>
          <div
            className="left-1/2 top-1/2 z-[3] transform-style-3d"
            style={{
              transform: `translate(-50%, -50%) rotateY(${rotate}deg)`,
              transformOrigin: "50% 0",
              position: isActive ? "absolute" : "fixed",
              top: isActive ? "50%" : "100vh",
              transition: isTransitionActive ? "0s" : ".5s",
              width: imgWidth,
              height: imgHeight,
            }}
          >
            <div className="absolute h-full w-full bg-white p-5 backface-hidden md:p-3">
              <img className="h-full w-full object-cover" src={img} alt="" />
            </div>
            <div
              className="absolute h-full w-full bg-white p-5 backface-hidden"
              style={{
                transform: `rotateY(180deg)`,
              }}
            >
              <img className="h-full w-full object-cover" src={img_2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
