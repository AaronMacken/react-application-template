import { useState, FormEvent, ReactElement } from 'react';
import useMultiStepForm from './useMultiStepForm';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

type FormData = {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
};

const INITIAL_DATA: FormData = {
  firstName: '',
  lastName: '',
  age: '',
  street: '',
  city: '',
  state: '',
  zip: '',
  email: '',
  password: ''
};

const MultiStepForm = () => {
  const [data, setData] = useState(INITIAL_DATA);

  const handleUpdateValue = (fields: Partial<FormData>) => {
    setData((prev) => ({ ...prev, ...fields }));
  };

  const steps: ReactElement[] = [
    <StepOne {...data} onUpdateField={handleUpdateValue} />,
    <StepTwo {...data} onUpdateField={handleUpdateValue} />,
    <StepThree {...data} onUpdateField={handleUpdateValue} />
  ];

  const {
    goToNextStep,
    goToPreviousStep,
    currentStepComponent,
    stepComponents,
    currentStepIndex
  } = useMultiStepForm(steps);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (currentStepIndex === stepComponents.length -1) {
      console.log(data);
    }

    goToNextStep();
  };

  return (
    <div
      style={{
        position: 'relative',
        background: 'white',
        border: '1px solid black',
        padding: '2rem',
        margin: '1rem',
        borderRadius: '.5rem'
      }}
    >
      <form onSubmit={handleSubmit}>
        <div style={{ position: 'absolute', top: '.5rem', right: '.5rem' }}>
          {currentStepIndex + 1} / {stepComponents.length}
        </div>
        {currentStepComponent}
        <div>
          <button
            type="button"
            disabled={currentStepIndex <= 0}
            onClick={goToPreviousStep}
          >
            Back
          </button>
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
