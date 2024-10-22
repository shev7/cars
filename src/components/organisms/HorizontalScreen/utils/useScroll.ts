import { useCallback, useEffect, useRef } from "react";

export const useScroll = (scrollHeight: number) => {
  const ref = useRef<HTMLDivElement>(null);

  const scrollCallback = useCallback(() => {
    if (!ref.current) return;

    const left =
      1.2 * (window.scrollY - (ref.current.parentElement?.offsetTop ?? 0)) -
      100;

    if (left > 1.2 * scrollHeight) {
      return;
    }

    ref.current.style.transform = `translate(-${left > 0 ? left : 0}px, 0)`;
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", scrollCallback);
    return () => {
      document.removeEventListener("scroll", scrollCallback);
    };
  }, []);

  return { ref };
};
