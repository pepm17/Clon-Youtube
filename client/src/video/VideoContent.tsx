import React, { useEffect } from 'react'
import { VideoGrid } from './VideoGrid'
import './VideoContent.css'
import { useDispatch } from 'react-redux'
import { getAllVideos } from './video.redux'

export const VideoContent = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getAllVideos())
  },[dispatch])

  return (
    <div className="video_content">
      <div className="video_content_container"><VideoGrid title="Title" /></div>
    </div>
  )
}
