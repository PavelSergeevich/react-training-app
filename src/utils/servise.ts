import { Url, UrlPage } from '../constants/global';
import { getFavoritesStorage, searcher } from './localStorage';
import { PhotoProps } from './types';

interface ServiceProps {
  from: number;
  to: number;
}

const filteredPhotos = (photoArr: Array<PhotoProps>) => {
  let arr = [];
  for (let i = 0; i < photoArr.length; i++) {
    if (searcher(getFavoritesStorage(), photoArr[i].id)) arr.push(photoArr[i]);
  }
  return arr;
};

const service = {
  getData: async ({ from, to }: ServiceProps) => {
    const loadData = await fetch(Url + UrlPage(0, 24));
    const photos = await loadData.json();
    const favorites = filteredPhotos(photos);
    return new Promise((resolve, reject) => {
      const data = photos.slice(from, to);
      const favorite = favorites.slice(from, to);
      resolve({
        count: photos.length,
        countFav: favorites.length,
        data: data,
        favorite: favorite,
      });
    });
  },
};

export default service;
