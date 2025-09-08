import { useState, useEffect } from 'react';

const useDebounceCallback = () => {
  const [timeoutId, setTimeoutId] = useState<ReturnType<
    typeof setTimeout
  > | null>(null);

  const cancelTimeout = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);

      setTimeoutId(null);
    }
  };

  const debouncedCallback = (callback: () => void) => {
    cancelTimeout();

    const searchQueryTimerId = setTimeout(() => {
      callback();
    }, 1000);

    setTimeoutId(searchQueryTimerId);
  };

  return { debouncedCallback, cancelTimeout };
};

const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};

export { useDebounceCallback, useDebounce };
