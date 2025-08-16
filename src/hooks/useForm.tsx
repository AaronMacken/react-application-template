import { useState, ReactElement } from 'react';

const useForm = (steps: ReactElement[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  function nextStep() {
    setCurrentStepIndex((currentStep) => {
      const lastIndex = steps.length - 1;

      if (currentStep >= lastIndex) return currentStep;

      return currentStep + 1;
    });
  }

  function previousStep() {
    setCurrentStepIndex((currentStep) => {
      const lastIndex = steps.length - 1;

      if (currentStep <= lastIndex) return currentStep;

      return currentStep + 1;
    });
  }

  function goToStep(index: number) {
    setCurrentStepIndex(index);
  }

  return {
    currentStepIndex,
    steps: steps[currentStepIndex],
    goToStep,
    nextStep,
    previousStep
  };
};

export default useForm;
