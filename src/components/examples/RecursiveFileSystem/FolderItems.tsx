import * as styles from './RecursiveFileSystem.scss';
import RecursiveFileSystem from './RecursiveFileSystem';

const FolderItems = ({ folderItems }: any) => {
  return folderItems.map((item: any) => {
    if (item.folderItems) {
      return (
        <RecursiveFileSystem folderItems={item.folderItems} name={item.name} />
      );
    }

    return <span className={styles.folderItem}>{item.name}</span>;
  });
};

export default FolderItems;
