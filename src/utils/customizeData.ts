export const customizeData = (prevData: ImageInfo[]) => {
  const copyData = [...prevData].reverse();
  const SIZE = 5;
  const splitedArray = [];
  const newDataList: CustomFormatImageInfo[] = [];

  while (copyData.length > 0) {
    const splicedArray = copyData.splice(0, SIZE);
    splitedArray.push(splicedArray);
  }

  splitedArray.map((dataItem, idx) => {
    const dataObj = {
      data: dataItem,
      page: idx + 1,
    };
    return newDataList.push(dataObj);
  });

  return newDataList;
};
