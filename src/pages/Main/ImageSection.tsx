import { MouseEventHandler, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  imageDataListAtom,
  isFilterAtom,
  mainImageAtom,
  maxPageAtom,
  pageAtom,
  searchAtom,
} from 'store/atom';

import { fetchImageData } from 'service/image';
import { customizeData } from 'utils/customizeData';
import { filterData } from 'utils/filterData';
import styles from './styles.module.scss';

function ImageSection() {
  const [imageDataList, setImageDataList] =
    useRecoilState<CustomFormatImageInfo>(imageDataListAtom);
  const [mainImage, setMainImage] = useRecoilState<ImageInfo>(mainImageAtom);
  const [page, setPage] = useRecoilState(pageAtom);
  const [maxPage, setMaxPage] = useRecoilState(maxPageAtom);
  const isFilter = useRecoilValue(isFilterAtom);
  const searchValue = useRecoilValue(searchAtom);

  useEffect(() => {
    (async () => {
      const data = await fetchImageData();
      const filtedData = filterData(data, searchValue);
      const customData = isFilter
        ? customizeData(filtedData)
        : customizeData(data);

      const renderData = customData[page - 1];
      if (renderData) {
        setImageDataList(renderData);
        setMainImage(renderData.data[0]);
        setMaxPage(customData.length);
      }
    })();
  }, [page, isFilter]);
  const onClickMainImage: MouseEventHandler<HTMLButtonElement> = (e) => {
    console.log(e.currentTarget); // 모달 Portal을 활용해 이미지 상세 내용 띄우기
  };

  const onClickSubImage: MouseEventHandler<HTMLButtonElement> = (e) => {
    const { id } = e.currentTarget.dataset;
    const findData = imageDataList?.data.find((item) => {
      return item.id === Number(id);
    }) as ImageInfo;
    setMainImage(findData);
  };

  const onClickPageButton: MouseEventHandler<HTMLButtonElement> = (e) => {
    const { name } = e.currentTarget;

    if (name === 'prev') {
      if (page === 1) return;
      setPage((prev) => prev - 1);
    } else if (name === 'next') {
      if (page === maxPage) return;
      setPage((prev) => prev + 1);
    }
  };

  const imageList = imageDataList?.data.map((item, idx) => {
    const key = `image-data-${idx}`;
    return (
      <li key={key} className={styles.subImageItem} data-id={item.id}>
        <button
          type="button"
          onClick={onClickSubImage}
          data-id={item.id}
          data-title={item.title}
        >
          <img
            src={`https://place-hold.it/60x60/ef9a9a/ffffff.png&text=${item.id}`}
            alt="sample"
            draggable={false}
          />
        </button>
      </li>
    );
  });

  return (
    <section className={styles.imageSection}>
      <ul className={styles.imageBox}>
        <li className={styles.mainImageWrapper}>
          <button
            type="button"
            onClick={onClickMainImage}
            data-id={mainImage?.id}
          >
            <img
              src={`https://place-hold.it/300x300/e57373/ffffff.png&text=${mainImage?.id}`}
              alt="sample"
              draggable={false}
            />
            <p className={styles.imageTitle}>{mainImage?.title}</p>
          </button>
        </li>

        <li className={styles.subImageWrapper}>
          <ul className={styles.subImageBox}>{imageList}</ul>
        </li>
        <li className={styles.pagerWrapper}>
          <ul className={styles.pagerBox}>
            <li className={styles.pager}>
              <button type="button" name="prev" onClick={onClickPageButton}>
                Prev
              </button>
            </li>
            <li className={styles.pager}>
              <button type="button" name="next" onClick={onClickPageButton}>
                Next
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
}

export default ImageSection;
