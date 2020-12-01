import React from 'react'
import { VideoGrid } from './VideoGrid'
import './Content.css'

export const Content = () => {
  const grids = Array.apply(null, new Array(2)).map((val, index) => (
    <VideoGrid key={index} title="Title" />
  ))

  return (
    <div className="video_content">
      <div className="video_content_container">{grids}</div>
    </div>
  )
}
