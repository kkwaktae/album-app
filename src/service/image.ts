import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 30 * 1000,
});

export const fetchImageData = async () => {
  const { data } = await instance.get<ImageInfo[]>('/albums');

  const newData = customizeData(data);

  return newData;
};

const customizeData = (prevData: ImageInfo[]) => {
  const copyData = [...prevData];
  const SIZE = 5;
  const splitArray = [];
  const newData: CustomFormatImageInfo[] = [];

  while (copyData.length > 0) {
    const splicedArray = copyData.splice(0, SIZE);

    splitArray.push(
      splicedArray.concat(
        new Array(SIZE - splicedArray.length).fill({
          userId: 0,
          id: 0,
          title: '',
        })
      )
    );
  }

  splitArray.map((dataItem, idx) => {
    const dataObj = {
      data: dataItem,
      page: idx + 1,
    };
    return newData.push(dataObj);
  });

  return newData;
};
