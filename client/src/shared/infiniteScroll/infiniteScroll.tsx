import React from 'react'
import { Waypoint } from 'react-waypoint'
import { IInfiniteScroll } from './infiniteScroll.interface'

export const InfiniteScroll = (props: IInfiniteScroll) => {
  return (
    <>
      {props.children}
      <Waypoint bottomOffset="-15px" onEnter={props.callback}></Waypoint>
    </>
  )
}
