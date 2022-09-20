const PHOTOS = 'photos';
const FAVORITE = 'favorite';

interface PhotoProps {
  albumId: number;
  id: number;
  //thumbnailUrl: string;
  title: string;
  url: string;
  like: boolean;
}

sessionStorage.setItem(FAVORITE, JSON.stringify([]));

export function getPhotosFromSStorage() {
  const storagePhotos = sessionStorage.getItem(PHOTOS);

  return storagePhotos ? JSON.parse(storagePhotos) : [];
}

export function getFavoritesFromSStorage() {
  const storageFavorites = sessionStorage.getItem(FAVORITE);

  return storageFavorites ? JSON.parse(storageFavorites) : [];
}

export function isSStorage() {
  const storageTodos = sessionStorage.getItem(PHOTOS);

  return !!storageTodos;
}

export function addFavoriteSStorage() {
  const storagePhotos = sessionStorage.getItem(PHOTOS);
  const favorites: any[] = [];
  // @ts-ignore
  JSON.parse(storagePhotos).forEach((card) => {
    if (card.like === true) favorites.push(card);
  });
  console.log(favorites);
  return sessionStorage.setItem(FAVORITE, JSON.stringify(favorites));
}

export function checkFavoritesInSStorage(card: number) {
  sessionStorage.setItem(
    PHOTOS,
    JSON.stringify(
      // @ts-ignore
      JSON.parse(sessionStorage.getItem(PHOTOS)).map((photo) => {
        if (photo.id === card) {
          photo.like = !photo.like;
        }
        return photo;
      })
    )
  );
}
