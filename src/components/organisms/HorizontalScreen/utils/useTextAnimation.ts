import { throttle, useMobile } from "@utils";
import { useEffect, useRef, useState } from "react";

export const useTextAnimation = () => {
  let TEXT_VELOCITY = 2000;
  let TEXT_SHIFT = 1500;

  const { mobileWidth } = useMobile();

  const ref = useRef<HTMLDivElement>(null);

  if (mobileWidth < 1000) {
    TEXT_VELOCITY = 1000;
    TEXT_SHIFT = 1200;
  }

  if (mobileWidth < 500) {
    TEXT_VELOCITY = 500;
    TEXT_SHIFT = 600;
  }

  const [fontSize, setFontSize] = useState(0);

  const scrollCallback = () => {
    if (!ref.current?.firstChild) return;

    if (
      Math.round(window.scrollY - (ref.current.parentElement?.offsetTop ?? 0)) >
      10
    ) {
      return;
    }

    const height = ref.current.parentElement?.parentElement?.offsetTop ?? 0;

    const transform =
      (1 - window.scrollY / height) * TEXT_VELOCITY + TEXT_SHIFT;

    (ref.current.firstChild as HTMLDivElement).style.transform =
      `translate(${transform}px, 0)`;
    (ref.current.lastChild as HTMLDivElement).style.transform =
      `translate(${transform}px, 0)`;
  };

  const throttled = throttle(scrollCallback, 100);

  useEffect(() => {
    document.addEventListener("scroll", throttled);

    if (mobileWidth < 500) {
      setFontSize(Math.floor((ref.current?.clientHeight ?? 0) / 8));
    } else {
      setFontSize(Math.floor((ref.current?.clientHeight ?? 0) / 3));
    }

    return () => {
      document.removeEventListener("scroll", throttled);
    };
  }, [mobileWidth]);

  return { fontSize, animationRef: ref };
};
