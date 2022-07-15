import { MouseEvent, useEffect, useState } from 'react';

import { fetchImageData } from 'service/image';
import styles from './styles.module.scss';

function ImageSection() {
  const [imageDataList, setImageDataList] = useState<CustomFormatImageInfo>();
  const [mainImageState, setMainImageState] = useState<number>();
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(0);

  useEffect(() => {
    (async () => {
      const data = await fetchImageData();
      const renderData = data[page - 1];
      renderData.data.reverse();
      setImageDataList(renderData);
      setMainImageState(renderData.data[0].id);
      setMaxPage(data.length);
    })();
  }, [page]);

  const onClickMainImage = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget);
  };

  const onClickSubImage = (e: MouseEvent<HTMLButtonElement>) => {
    const { id } = e.currentTarget.dataset;
    setMainImageState(Number(id));
  };

  const onClickPrevButton = () => {
    if (page === 1) return;
    setPage((prev) => prev - 1);
  };

  const onClickNextButton = () => {
    if (page === maxPage) return;
    setPage((prev) => prev + 1);
  };

  const imageList = imageDataList?.data.map((item, idx) => {
    const key = `image-data-${idx}`;
    return (
      <li key={key} className={styles.subImageItem} data-id={item.id}>
        <button type="button" onClick={onClickSubImage} data-id={item.id}>
          <img
            src={`https://place-hold.it/60x60/ef9a9a/ffffff.png&text=${item.id}`}
            alt="sample"
            draggable={false}
            data-src
          />
        </button>
      </li>
    );
  });

  return (
    <section className={styles.imageSection}>
      <ul className={styles.imageBox}>
        <li className={styles.mainImageWrapper}>
          <button type="button" onClick={onClickMainImage}>
            <img
              src={`https://place-hold.it/300x300/e57373/ffffff.png&text=${mainImageState}`}
              alt="sample"
              draggable={false}
            />
          </button>
        </li>
        <li className={styles.subImageWrapper}>
          <ul className={styles.subImageBox}>{imageList}</ul>
        </li>
        <li className={styles.pagerWrapper}>
          <ul className={styles.pagerBox}>
            <li className={styles.pager}>
              <button type="button" onClick={onClickPrevButton}>
                Prev
              </button>
            </li>
            <li className={styles.pager}>
              <button type="button" onClick={onClickNextButton}>
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
