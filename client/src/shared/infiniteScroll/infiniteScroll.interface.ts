import { Waypoint } from 'react-waypoint'

export interface IInfiniteScroll {
  children: React.ReactElement
  callback(args: Waypoint.CallbackArgs): void
}
