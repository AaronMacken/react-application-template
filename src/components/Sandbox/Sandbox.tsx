import { useTheme } from '@context';

import { getIsDark } from '@utils';
import * as styles from './Sandbox.scss';

const Sandbox = () => {
  const { theme } = useTheme();
  const cls = getIsDark(theme) ? 'darkThemeStyles' : 'lightThemeStyles';

  return (
    <div className={styles[cls]}>
      <p>sandbox</p>
    </div>
  );
};

export default Sandbox;
