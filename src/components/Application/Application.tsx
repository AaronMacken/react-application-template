// import InputValidation from '@components/examples/InputValidation';
import RecursiveFileSystem from '@components/examples/RecursiveFileSystem';
import * as styles from './Application.scss';

export default function Application() {
  return (
    <div className={styles.root}>
      {/* <InputValidation /> */}
      <RecursiveFileSystem />
    </div>
  );
}
