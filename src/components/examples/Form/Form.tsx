import { useForm } from '@hooks';

const stepsArray = [<p>step one</p>, <p>step two</p>, <p>step three</p>];

const Form = () => {
  const { currentStepIndex, steps } = useForm(stepsArray);

  return <div>{steps}</div>;
};

export default Form;
