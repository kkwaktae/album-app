export const filterData = (prevData: ImageInfo[], searchValue: string) => {
  const copyData = [...prevData];
  const newData = copyData.filter((item) => {
    return item.title.toUpperCase().trim().includes(searchValue.toUpperCase());
  });

  return newData;
};
