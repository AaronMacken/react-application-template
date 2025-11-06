import { useEffect } from 'react';
import { useTheme } from '@context';
// import ProductForm from '@components/examples/ProductForm';
// import Counter from '@components/examples/Counter';
// import Form from '@components/examples/Form';
// import { getIsParenthesisStringValid } from '@components/examples/Algorithms';
// import { MinStack } from '@components/examples/Algorithms';
import { getIsParenthesisValidWithWildcards } from '@components/examples/Algorithms';
import { getIsDark } from '@utils';
import * as styles from './Sandbox.scss';

const Sandbox = () => {
  const { theme } = useTheme();
  const cls = getIsDark(theme) ? 'darkThemeStyles' : 'lightThemeStyles';

  useEffect(() => {
    console.log('should be true', getIsParenthesisValidWithWildcards('()'));
    console.log('should be true', getIsParenthesisValidWithWildcards('(*)'));
    console.log('should be true', getIsParenthesisValidWithWildcards('((*)'));
    console.log('should be true', getIsParenthesisValidWithWildcards('((*)'));

    console.log('should be false', getIsParenthesisValidWithWildcards('())'));
    console.log('should be false', getIsParenthesisValidWithWildcards('(*)))'));
    console.log('should be false', getIsParenthesisValidWithWildcards(')*'));
  }, []);

  return (
    <div className={styles[cls]}>
      <p>sandbox</p>
    </div>
  );
};

export default Sandbox;
