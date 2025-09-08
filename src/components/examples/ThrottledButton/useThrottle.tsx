import { useRef } from 'react';

const useThrottle = () => {
  const lastCall = useRef(0);

  const handleThrottledAction = (callback: () => void) => {
    const now = Date.now();

    if (now - lastCall.current >= 2000) {
      callback();

      lastCall.current = now;
    }
  };

  return { handleThrottledAction };
};

export { useThrottle };
