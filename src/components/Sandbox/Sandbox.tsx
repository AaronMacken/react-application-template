import { useEffect } from 'react';
import { useTheme } from '@context';
// import Form from '@components/examples/Form';
import Counter from '@components/examples/Counter';
import { getIsDark } from '@utils';
import * as styles from './Sandbox.scss';

// https://www.youtube.com/watch?v=uDCBSnWkuH0&t=879s
const Sandbox = () => {
  const { theme } = useTheme();

  const cls = getIsDark(theme) ? 'darkThemeStyles' : 'lightThemeStyles';

  return (
    <div className={styles[cls]}>
      <h1>Hi</h1>

      <p>This is a sandbox</p>

      {/* <Form theme={theme} /> */}
      <Counter />
    </div>
  );
};

export default Sandbox;
