export default async function getPhoto(url: string) {
  try {
    const photos = await fetch(url);
    const apiData = await photos.json();
    return apiData;
  } catch {
    console.error('Wrong Url! Check your constants!');
  } finally {
    console.info('Success data loading!');
  }
}