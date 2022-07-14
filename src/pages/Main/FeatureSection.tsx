import { CSSProperties, FormEvent, useState } from 'react';

import { AddIcon, SearchIcon } from 'assets/svgs';
import styles from './styles.module.scss';

function FeatureSection() {
  const [searchBarDisplay, setSearchBarDisplay] = useState(false);

  const searchBarStyle: CSSProperties = {
    visibility: 'visible',
    opacity: '1',
  };

  const onSubmitSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchBarDisplay(true);
  };

  const onClickAddIcon = () => {
    console.log('aaa');
  };
  return (
    <section className={styles.featureSection}>
      <form className={styles.featureBox} onSubmit={onSubmitSearch}>
        <div className={styles.searchItem}>
          <input
            className={styles.searchbar}
            type="text"
            placeholder="여기에 검색하세요"
            style={searchBarDisplay ? searchBarStyle : {}}
          />
          <button type="submit" className={styles.iconButton}>
            <SearchIcon className={styles.searchIcon} />
          </button>
        </div>
        <div className={styles.addItem}>
          <button
            type="button"
            className={styles.iconButton}
            onClick={onClickAddIcon}
          >
            <AddIcon className={styles.addIcon} />
          </button>
        </div>
      </form>
    </section>
  );
}

export default FeatureSection;
