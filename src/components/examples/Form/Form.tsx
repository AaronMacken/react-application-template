import { useForm } from '@hooks';

import * as styles from './Form.scss';

const stepsArray = [<p>step one</p>, <p>step two</p>, <p>step three</p>];

const Form = () => {
  const { currentStepIndex, steps } = useForm(stepsArray);

  return (
    <div className={styles.root}>
      <form>lorem ipsum form</form>
    </div>
  );
};

export default Form;
