export interface PhotoProps {
  albumId: number;
  id: number;
  //thumbnailUrl: string;
  title: string;
  url: string;
  like: boolean;
}

export interface FavoriteToggleType {
  toggle: boolean;
}
