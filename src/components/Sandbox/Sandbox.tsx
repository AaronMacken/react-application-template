import { useEffect } from 'react';
import { useTheme } from '@context';
// import ProductForm from '@components/examples/ProductForm';
// import Counter from '@components/examples/Counter';
// import Form from '@components/examples/Form';
// import { getIsParenthesisStringValid } from '@components/examples/Algorithms';
import { MinStack } from '@components/examples/Algorithms';
import { getIsDark } from '@utils';
import * as styles from './Sandbox.scss';

const Sandbox = () => {
  const { theme } = useTheme();
  const cls = getIsDark(theme) ? 'darkThemeStyles' : 'lightThemeStyles';

  useEffect(() => {
    const stack = new MinStack();

    console.log('---- Push values ----');
    stack.push(-2);
    stack.push(0);
    stack.push(-3);

    console.log('Top:', stack.top()); // expect -3
    console.log('Min:', stack.getMin()); // expect -3

    console.log('---- Pop once ----');
    stack.pop();

    console.log('Top after pop:', stack.top()); // expect 0
    console.log('Min after pop:', stack.getMin()); // expect -2

    console.log('---- Push more ----');
    stack.push(-1);

    console.log('Top:', stack.top()); // expect -1
    console.log('Min:', stack.getMin()); // expect -2

    console.log('---- Pop until empty ----');
    stack.pop();
    stack.pop();
    stack.pop();
    console.log('Stack should now be empty:', stack);
  }, []);

  return (
    <div className={styles[cls]}>
      <p>sandbox</p>
    </div>
  );
};

export default Sandbox;
