import { IUserVideo } from '../user/user.interface'
export interface IVideoGridHeader {
  title: string
}
export interface IVideo {
  _id: string
  title: string
  description: string
  view: number
  postedBy: IUserVideo
  updatedAt: Date
}
