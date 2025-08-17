import { useForm } from '@hooks';
import UserForm from './UserForm';
import AddressForm from './AddressForm';
import AccountForm from './AccountForm';
import * as styles from './Form.scss';

// https://www.youtube.com/watch?v=uDCBSnWkuH0

const stepsArray = [<UserForm />, <AddressForm />, <AccountForm />];

const renderButton = (
  isIndexAtBoundary: boolean,
  buttonText: string,
  buttonCallback: () => void
) => {
  if (isIndexAtBoundary) {
    return null;
  }

  return (
    <button type="button" onClick={buttonCallback}>
      {buttonText}
    </button>
  );
};

const Form = () => {
  const {
    step,
    currentStepIndex,
    totalSteps,
    isFirstStep,
    isLastStep,
    goNext,
    goBack
  } = useForm(stepsArray);

  const backButton = renderButton(isFirstStep, 'Back', goBack);
  const nextButton = renderButton(isLastStep, 'Next', goNext);

  return (
    <div className={styles.root}>
      <form className={styles.form}>
        <p>Lorem Ipsum Form</p>
        <div className={styles.formSteps}>
          {currentStepIndex} / {totalSteps}
        </div>
        {step}
        <div className={styles.buttonWrapper}>
          {backButton}
          {nextButton}
        </div>
      </form>
    </div>
  );
};

export default Form;
