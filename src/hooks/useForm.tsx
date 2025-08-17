import { useState, ReactElement } from 'react';

const useForm = (steps: ReactElement[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(1);

  function goNext() {
    setCurrentStepIndex((currentStep) => {
      const lastIndex = steps.length;

      if (currentStep >= lastIndex) return currentStep;

      return currentStep + 1;
    });
  }

  function goBack() {
    setCurrentStepIndex((currentStep) => {
      if (currentStep <= 1) return currentStep;

      return currentStep - 1;
    });
  }

  function goToStep(index: number) {
    setCurrentStepIndex(index);
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex - 1],
    steps,
    totalSteps: steps.length,
    isFirstStep: currentStepIndex === 1,
    isLastStep: currentStepIndex === steps.length,
    goToStep,
    goNext,
    goBack
  };
};

export default useForm;
