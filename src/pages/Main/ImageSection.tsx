import { useEffect, useState } from 'react';

import { fetchImageData } from 'service/image';
import styles from './styles.module.scss';

function ImageSection() {
  const [imageDataList, setImageDataList] = useState<CustomFormatImageInfo[]>(
    []
  );

  useEffect(() => {
    (async () => {
      const data = await fetchImageData();
      setImageDataList(data);
    })();
  }, []);
  console.log(imageDataList);

  return (
    <section className={styles.imageSection}>
      <ul className={styles.imageBox}>
        <li className={styles.mainImageWrapper}>
          <img
            src="https://place-hold.it/300x300/e57373/ffffff.png&text=main"
            alt="sample"
            draggable={false}
          />
        </li>
        <li className={styles.subImageWrapper}>
          <ul className={styles.subImageBox}>
            <li className={styles.subImageItem}>
              <img
                src="https://place-hold.it/60x60/ef9a9a/ffffff.png&text=sample"
                alt="sample"
                draggable={false}
              />
            </li>
            <li className={styles.subImageItem}>
              <img
                src="https://place-hold.it/60x60/ef9a9a/ffffff.png&text=sample"
                alt="sample"
                draggable={false}
              />
            </li>
            <li className={styles.subImageItem}>
              <img
                src="https://place-hold.it/60x60/ef9a9a/ffffff.png&text=sample"
                alt="sample"
                draggable={false}
              />
            </li>
            <li className={styles.subImageItem}>
              <img
                src="https://place-hold.it/60x60/ef9a9a/ffffff.png&text=sample"
                alt="sample"
                draggable={false}
              />
            </li>
            <li className={styles.subImageItem}>
              <img
                src="https://place-hold.it/60x60/ef9a9a/ffffff.png&text=sample"
                alt="sample"
                draggable={false}
              />
            </li>
          </ul>
        </li>
        <li className={styles.pagerWrapper}>
          <button type="button">1</button>
          <button type="button">2</button>
          <button type="button">3</button>
          <button type="button">4</button>
          <button type="button">5</button>
        </li>
      </ul>
    </section>
  );
}

export default ImageSection;
