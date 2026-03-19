import { useRef } from "react";

const useDebounce = (fn: Function, delay: number) => {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  return function (...args: any[]) {
    if (timer.current) clearTimeout(timer.current); // clear previous timer
    timer.current = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

export default useDebounce;
