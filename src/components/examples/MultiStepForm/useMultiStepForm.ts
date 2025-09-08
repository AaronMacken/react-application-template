import { useState, ReactElement } from 'react';

const useMultiStepForm = (stepComponents: ReactElement[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const goToNextStep = () => {
    setCurrentStepIndex((currentStep) => {
      if (currentStep >= stepComponents.length - 1) {
        return currentStep;
      }

      return currentStep + 1;
    });
  };

  const goToPreviousStep = () => {
    setCurrentStepIndex((currentStep) => {
      if (currentStep <= 0) {
        return currentStep;
      }

      return currentStep - 1;
    });
  };

  const goToStep = (stepIndex: number) => {
    setCurrentStepIndex(stepIndex);
  };

  return {
    currentStepIndex,
    currentStepComponent: stepComponents[currentStepIndex],
    goToNextStep,
    goToPreviousStep,
    goToStep,
    stepComponents
  };
};

export default useMultiStepForm;
