export interface Video {
  _id: string;
  title: string;
  description: string;
  image: string;
  video: string;
  view: number;
  postedBy: { username: string; photo: string };
  createdAt: string;
}
