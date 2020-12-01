import React, { useEffect, useState } from 'react'
import { VideoPreview } from './VideoPreview'
import './VideoGrid.css'
import { VideoGridHeader } from './VideoGridHeader'
import { Divider } from 'semantic-ui-react'
import { IVideoGridHeader } from './video.interface'
import { getAllVideos } from './video.service'
import { IVideo } from './video.interface'

export const VideoGrid = (props: IVideoGridHeader) => {
  const [videos, setVideos] = useState<IVideo[]>([])
  let preview = videos.map((val, index) => <VideoPreview {...val} key={index} />)
  useEffect(() => {
    fetchAllVideos()
  }, [])

  const fetchAllVideos = async () => {
    const response = await getAllVideos()
    setVideos(response)
  }

  return (
    <>
      <VideoGridHeader title={props.title} />
      <div className="video_grid">{preview}</div>
      <Divider />
    </>
  )
}
