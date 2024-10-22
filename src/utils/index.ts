export const debounce = (
  func: (...args: unknown[]) => unknown,
  delay: number,
) => {
  let timeoutId: NodeJS.Timeout | null | undefined;

  return (args: unknown) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func(args);
    }, delay);
  };
};

export function throttle<T extends unknown[]>(
  func: (...args: T) => unknown,
  delay: number,
) {
  let throttleTimeout: NodeJS.Timeout | null | undefined;
  let lastExecutionTime = 0;

  return function (this: unknown, ...args: T) {
    const currentTimestamp = new Date().getTime();

    if (currentTimestamp - lastExecutionTime < delay) {
      if (throttleTimeout) {
        clearTimeout(throttleTimeout);
      }

      throttleTimeout = setTimeout(() => {
        lastExecutionTime = currentTimestamp;
        func.apply(this, args);
      }, delay);
    } else {
      lastExecutionTime = currentTimestamp;
      func.apply(this, args);
    }
  };
}

export { useIntersection } from "./useIntersection";
export { useMobile } from "./useMobile";
