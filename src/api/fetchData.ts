export default async function getPhoto(url: string) {
  try {
    const photos = await fetch(url);
    const objWithFavorite = { like: false };
    const apiData = await photos.json();
    return setStorage(
      apiData.map((photo: object) => ({ ...photo, ...objWithFavorite }))
    );
  } catch {
    console.error('Wrong Url! Check your constants!');
  } finally {
    console.info('Success data loading!');
  }
}

const setStorage = (data: Array<object>) => {
  sessionStorage.setItem('photos', JSON.stringify(data));
};
