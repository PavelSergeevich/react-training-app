const FAVORITE = 'favorite';

export function getFavoritesStorage() {
  const storageFavorites = localStorage.getItem(FAVORITE);
  return storageFavorites ? JSON.parse(storageFavorites) : [];
}

export const searcher = (arr: Array<number>, id: number) => {
  return arr.includes(id);
};

function checkFavoriteInStorage(id: number) {
  const newArray = getFavoritesStorage();
  if (newArray.length === 0) {
    newArray.push(id);
    return newArray;
  } else {
    if (searcher(newArray, id)) {
      return newArray.filter((value: number) => {
        return value !== id;
      });
    } else {
      newArray.push(id);
    }
  }
  return newArray;
}

export function setFavoriteToStorage(id: number) {
  localStorage.setItem(FAVORITE, JSON.stringify(checkFavoriteInStorage(id)));
}
