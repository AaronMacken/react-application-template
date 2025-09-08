import { useEffect } from 'react';
import { useTheme } from '@context';
import ProductForm from '@components/examples/ProductForm';
// import Counter from '@components/examples/Counter';
// import Form from '@components/examples/Form';
import { getIsDark } from '@utils';
import * as styles from './Sandbox.scss';

// https://www.youtube.com/watch?v=uDCBSnWkuH0&t=879s
const Sandbox = () => {
  const { theme } = useTheme();

  const cls = getIsDark(theme) ? 'darkThemeStyles' : 'lightThemeStyles';

  return (
    <div className={styles[cls]}>
      <p>sandbox</p>
      <ProductForm />
      {/* <Counter /> */}
      {/* <Form theme={theme} /> */}
    </div>
  );
};

export default Sandbox;
