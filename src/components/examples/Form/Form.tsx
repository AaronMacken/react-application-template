import { useForm } from '@hooks';

import * as styles from './Form.scss';

const stepsArray = [
  <p className={styles.step}>step one</p>,
  <p className={styles.step}>step two</p>,
  <p className={styles.step}>step three</p>
];

const Form = () => {
  const { step, currentStepIndex, totalSteps } = useForm(stepsArray);

  return (
    <div className={styles.root}>
      <form className={styles.form}>
        <p>Lorem Ipsum Form</p>
        <div className={styles.formSteps}>
          {currentStepIndex} / {totalSteps}
        </div>
        {step}
      </form>
    </div>
  );
};

export default Form;
