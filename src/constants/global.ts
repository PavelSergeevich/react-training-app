const Url = 'https://jsonplaceholder.typicode.com/photos';
const UrlPage = (start: number, limit: number) => {
  return `?_start=${start}&_limit=${limit}`;
};
const Title = 'Training React App';
const Info =
  'Web application that displays photos and allows a user to mark the ones they like as favorites.';
const pageSize = 6;

export { Url, UrlPage, Title, Info, pageSize };
