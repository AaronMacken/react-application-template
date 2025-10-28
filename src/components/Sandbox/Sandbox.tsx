import { useEffect } from 'react';
import { useTheme } from '@context';
// import ProductForm from '@components/examples/ProductForm';
// import Counter from '@components/examples/Counter';
// import Form from '@components/examples/Form';
import { getIsParenthesisStringValid } from '@components/examples/Algorithms';
import { getIsDark } from '@utils';
import * as styles from './Sandbox.scss';

const Sandbox = () => {
  const { theme } = useTheme();
  const cls = getIsDark(theme) ? 'darkThemeStyles' : 'lightThemeStyles';

  useEffect(() => {
    // console.log(getIsParenthesisStringValid('()')); // ✅ true
    // console.log(getIsParenthesisStringValid('()()')); // ✅ true
    // console.log(getIsParenthesisStringValid('(){}[]')); // ✅ true
    // console.log(getIsParenthesisStringValid('{[()]}')); // ✅ true
    // console.log(getIsParenthesisStringValid('((()))')); // ✅ true
    // console.log(getIsParenthesisStringValid('[({})]')); // ✅ true
    // console.log(getIsParenthesisStringValid('{[]}')); // ✅ true
    // console.log(getIsParenthesisStringValid('')); // ✅ true (empty string is valid)

    console.log(getIsParenthesisStringValid('(')); // ❌ false
    console.log(getIsParenthesisStringValid(')')); // ❌ false
    console.log(getIsParenthesisStringValid(')(')); // ❌ false
    console.log(getIsParenthesisStringValid('(()')); // ❌ false
    console.log(getIsParenthesisStringValid('(()))')); // ❌ false
    console.log(getIsParenthesisStringValid('(]')); // ❌ false
    console.log(getIsParenthesisStringValid('{[}]')); // ❌ false
    console.log(getIsParenthesisStringValid('[(])')); // ❌ false
    console.log(getIsParenthesisStringValid('([)]')); // ❌ false
    console.log(getIsParenthesisStringValid('{')); // ❌ false
    console.log(getIsParenthesisStringValid('}')); // ❌ false
  }, []);

  return (
    <div className={styles[cls]}>
      <p>sandbox</p>
    </div>
  );
};

export default Sandbox;
