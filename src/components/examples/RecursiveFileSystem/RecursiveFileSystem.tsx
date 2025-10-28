import { useState } from 'react';
import * as styles from './RecursiveFileSystem.scss';

import FolderItems from './FolderItems';

const FILE_ONE = { name: 'file 1' };
const FILE_TWO = { name: 'file 2' };
const NESTED_FILE_ONE = { name: 'nested file 1' };
const NESTED_FILE_TWO = { name: 'nested file 2' };

const DATA = [
  FILE_ONE,
  FILE_TWO,
  {
    name: 'nested folder',
    folderItems: [NESTED_FILE_ONE, { name: 'nested folder 2', folderItems: [NESTED_FILE_TWO] }]
  }
];

const RecursiveFileSystem = ({ name = 'Top Level', folderItems = DATA }: any) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleExpanded = () => setIsExpanded((prev) => !prev);

  return (
    <div>
      <button type="button" className={styles.folderButton} onClick={handleExpanded}>
        {name}
      </button>
      {isExpanded && (
        <div className={styles.folderItemWrapper}>
          <FolderItems folderItems={folderItems} />
        </div>
      )}
    </div>
  );
};

export default RecursiveFileSystem;
