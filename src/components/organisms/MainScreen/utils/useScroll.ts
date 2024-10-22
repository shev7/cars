import { useCallback, useEffect, useState } from "react";

export const useScroll = () => {
  const [count, setCount] = useState(0);
  const [height, setHeight] = useState(0);

  const scrollCallback = useCallback(() => {
    const newCount = Math.floor(window.scrollY / window.innerHeight);
    const newHeight = Math.floor(window.scrollY % window.innerHeight);

    setHeight(newHeight);
    setCount(newCount);
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", scrollCallback);

    return () => {
      document.removeEventListener("scroll", scrollCallback);
    };
  }, []);

  return { count, height };
};
