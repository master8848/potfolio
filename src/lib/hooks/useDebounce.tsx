import { useEffect, useState } from "react";

export function useDebounce<T>(state: T, time: number = 1500): T {
  const [debouncedState, setDebouncedState] = useState(state);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedState(state);
    }, time);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [state, time]);

  return debouncedState;
}
