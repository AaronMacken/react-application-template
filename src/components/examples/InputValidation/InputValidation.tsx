import { useState, useEffect, ChangeEvent } from 'react';
import { User } from '@customTypes/user';
import * as styles from './inputValidation.scss';

export default function InputValidation() {
  const [inputValues, setInputValues] = useState<User>({
    name: '',
    age: 0
  });

  const [error, setError] = useState('');

  useEffect(() => {
    console.log('input values changed', inputValues);
  }, [inputValues]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputValues((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const isError = inputValues.name.length < 2 || Number(inputValues.age) < 18;

  const handleSubmit = () => {
    if (isError) {
      setError(
        'Name must be at least 2 characters and age must be at least 18'
      );

      return;
    }

    console.log('submitted values!', inputValues);
  };

  const renderError = () => {
    if (!error) {
      return null;
    }

    return <p className={styles.error}>{error}</p>;
  };

  const errorMessage = renderError();

  return (
    <div className={styles.contentWrapper}>
      <h1 className={styles.title}>input validaiton example</h1>
      <input
        type="text"
        value={inputValues.name}
        name="name"
        onChange={handleChange}
      />
      <input
        type="number"
        value={inputValues.age}
        name="age"
        onChange={handleChange}
      />
      {errorMessage}
      <button
        className={styles.submitButton}
        onClick={handleSubmit}
        type="button"
      >
        Submit
      </button>
    </div>
  );
}
