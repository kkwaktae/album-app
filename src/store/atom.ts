import { atom } from 'recoil';

export const isFilterAtom = atom({
  key: 'isFilterAtom',
  default: false,
});

export const searchAtom = atom({
  key: 'searchAtom',
  default: '',
});

export const imageDataListAtom = atom<CustomFormatImageInfo>({
  key: 'imageDataListAtom',
  default: {
    data: [],
    page: 0,
  },
});

export const mainImageAtom = atom<ImageInfo>({
  key: 'mainImageAtom',
  default: { userId: 0, id: 0, title: '' },
});

export const pageAtom = atom({
  key: 'pageAtom',
  default: 1,
});

export const maxPageAtom = atom({
  key: 'maxPageAtom',
  default: 0,
});
