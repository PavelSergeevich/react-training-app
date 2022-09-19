export default async function getPhoto(url: string) {
  try {
    const photos = await fetch(url);
    return await photos.json();
  } catch {
    console.error('Wrong Url! Check your constants!');
  } finally {
    console.info('Success data loading!');
  }
}
