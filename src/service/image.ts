import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 30 * 1000,
});

export const fetchImageData = async () => {
  const { data } = await instance.get<ImageInfo[]>('/albums');
  return data;
};
