import React from 'react'
import { VideoPreview } from './VideoPreview'
import './VideoGrid.css'
import { VideoGridHeader } from './VideoGridHeader'
import { Divider } from 'semantic-ui-react'
import { IVideoGridHeader } from './video.interface'
import { useSelector } from 'react-redux'
import { RootStore } from "../redux/store"

export const VideoGrid = (props: IVideoGridHeader) => {
  const videoState = useSelector((state: RootStore) => state.videos)
  let preview = videoState.videos.map((val, index) => <VideoPreview {...val} key={index} />)
  
  return (
    <>
      <VideoGridHeader title={props.title} />
      <div className="video_grid">{preview}</div>
      <Divider />
    </>
  )
}
