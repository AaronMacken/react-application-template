import { useState, useEffect, ChangeEvent } from 'react';

import { useDebounceCallback, useDebounce } from './useDebounce';

const DebouncedSearch = () => {
  // const { debouncedCallback, cancelTimeout } = useDebounceCallback();
  const [searchInputValue, setSearchInputValue] = useState('');
  const debouncedValue = useDebounce(searchInputValue, 1000);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    if (debouncedValue) {
      setSearchQuery(debouncedValue);
    }
  }, [debouncedValue]);

  const handleDebouncedSearch = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(value);

    // debouncedCallback(() => setSearchQuery(value));
  };

  const handleCancel = () => {
    // cancelTimeout();
    setSearchInputValue('');
    setSearchQuery('');
  };

  return (
    <>
      <input onChange={handleDebouncedSearch} value={searchInputValue} />
      <span>Query: {searchQuery}</span>

      <button type="button" onClick={handleCancel}>
        Cancel
      </button>
    </>
  );
};

export default DebouncedSearch;
