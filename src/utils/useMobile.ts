import { throttle } from "@utils";
import { useState, useEffect } from "react";

export const useMobile = (): { isMobile: boolean; mobileWidth: number } => {
  const [isMobile, setIsMobile] = useState(false);
  const [mobileWidth, setMobileWidth] = useState(Math.round(window.innerWidth));

  const throttled = throttle(() => {
    setMobileWidth(Math.round(window.innerWidth));
  }, 100);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);
    window.addEventListener("resize", throttled);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
      window.removeEventListener("resize", throttled);
    };
  }, []);

  return { isMobile, mobileWidth };
};

export default useMobile;
