import { useEffect } from 'react';
import { useTheme } from '@context';
// import ProductForm from '@components/examples/ProductForm';
// import Counter from '@components/examples/Counter';
// import Form from '@components/examples/Form';
import { getIndeciesOfSum } from '@components/examples/Algorithms';
import { getIsDark } from '@utils';
import * as styles from './Sandbox.scss';

const Sandbox = () => {
  const { theme } = useTheme();
  const cls = getIsDark(theme) ? 'darkThemeStyles' : 'lightThemeStyles';

  useEffect(() => {
    const indecies = getIndeciesOfSum([5, 3, 1, 6], 55);

    console.log('INDECIES: ', indecies);
  }, []);

  return (
    <div className={styles[cls]}>
      <p>sandbox</p>
    </div>
  );
};

export default Sandbox;
