import React, { useEffect } from 'react'
import { VideoGrid } from './VideoGrid'
import './Content.css'
import { useDispatch } from 'react-redux'
import { getAllVideos } from './video.redux'

export const Content = () => {
  const grids = Array.apply(null, new Array(1)).map((val, index) => (
    <VideoGrid key={index} title="Title" />
  ))
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getAllVideos())
  },[dispatch])

  return (
    <div className="video_content">
      <div className="video_content_container">{grids}</div>
    </div>
  )
}
