import { useState, ReactElement } from 'react';

const useForm = (steps: ReactElement[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(1);

  function nextStep() {
    setCurrentStepIndex((currentStep) => {
      const lastIndex = steps.length;

      if (currentStep >= lastIndex) return currentStep;

      return currentStep + 1;
    });
  }

  function previousStep() {
    setCurrentStepIndex((currentStep) => {
      const lastIndex = steps.length;

      if (currentStep <= lastIndex) return currentStep;

      return currentStep + 1;
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
    goToStep,
    nextStep,
    previousStep
  };
};

export default useForm;
