import {
  getFavoritesFromSStorage,
  getPhotosFromSStorage,
} from '../utils/sessionStorage';

const photos = getPhotosFromSStorage();
const favorites = getFavoritesFromSStorage();

const service = {
  // @ts-ignore
  getData: ({ from, to }) => {
    return new Promise((resolve, reject) => {
      const data = photos.slice(from, to);

      resolve({
        count: photos.length,
        data: data,
      });
    });
  },
};

export default service;
