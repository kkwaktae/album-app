import {
  ChangeEventHandler,
  CSSProperties,
  FormEventHandler,
  useState,
} from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { isFilterAtom, searchAtom } from 'store/atom';

import cx from 'classnames';

import { AddIcon, ResetIcon, SearchIcon } from 'assets/svgs';
import styles from './styles.module.scss';

function FeatureSection() {
  const [searchBarDisplay, setSearchBarDisplay] = useState(false);
  const [searchValue, setSearchValue] = useRecoilState(searchAtom);
  const setIsFilter = useSetRecoilState(isFilterAtom);

  const searchBarStyle: CSSProperties = {
    visibility: 'visible',
    opacity: '1',
  };

  const onSubmitSearch: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setIsFilter(false);
    if (searchBarDisplay && searchValue.trim().length > 0) {
      setIsFilter(true);
    } else {
      setIsFilter(false);
    }
    setSearchBarDisplay(true);
  };

  const onChangeSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.currentTarget;
    setSearchValue(value);
  };

  const onClickResetIcon = () => {
    setSearchValue('');
  };

  const onClickAddIcon = () => {
    console.log('add'); // 이미지 추가 기능 구현
  };

  return (
    <section className={styles.featureSection}>
      <form className={styles.featureBox} onSubmit={onSubmitSearch}>
        <div className={styles.searchItem}>
          <input
            className={styles.searchbar}
            type="text"
            placeholder="Search here !"
            style={searchBarDisplay ? searchBarStyle : {}}
            onChange={onChangeSearch}
            value={searchValue}
          />
          <button
            type="button"
            className={cx(styles.iconButton, styles.resetButton)}
            style={searchBarDisplay ? searchBarStyle : {}}
            onClick={onClickResetIcon}
          >
            <ResetIcon className={styles.resetIcon} />
          </button>
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
