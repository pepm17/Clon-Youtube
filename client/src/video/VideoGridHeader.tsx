import React from 'react'
import { IVideoGridHeader } from './video.interface'
import './VideoGridHeader.css'

export const VideoGridHeader = (props: IVideoGridHeader) => {
  return (
    <div className="video_grid_header">
      <span className="video_grid_header_title"> {props.title} </span>
    </div>
  )
}
