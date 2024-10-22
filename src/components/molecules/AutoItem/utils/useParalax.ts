import { throttle, useIntersection } from "@utils";
import { useEffect, useState } from "react";

export const useParalax = (ref: React.RefObject<HTMLElement>) => {
  const [scrollLeft, setScrollLeft] = useState(0);
  const isVisible = useIntersection(ref);

  const throttled = throttle(() => {
    if (!ref.current) return;

    const left =
      1.2 *
        (window.scrollY -
          (ref.current.parentElement?.parentElement?.offsetTop ?? 0)) -
      100;

    setScrollLeft(left);
  }, 100);

  useEffect(() => {
    document.addEventListener("scroll", throttled);
    return () => {
      document.removeEventListener("scroll", throttled);
    };
  }, []);

  return { scrollLeft, isVisible };
};
