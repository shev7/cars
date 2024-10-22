import { useEffect, useRef } from "react";

export const useIntersection = (
  element: React.RefObject<HTMLElement>,
  rootMargin: string = "0px",
) => {
  const ref = useRef<boolean>(false);

  useEffect(() => {
    const current = element?.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (ref.current === entry.isIntersecting) return;
        ref.current = entry.isIntersecting;
      },
      { rootMargin },
    );
    current && observer?.observe(current);

    return () => {
      current && observer.unobserve(current);
    };
  }, []);

  return ref.current;
};
