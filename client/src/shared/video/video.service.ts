import axios from 'axios'
import { IVideo } from './video.interface'

export const getAllVideos = async () => {
  const videos = await axios.get('http://localhost:4000/video', {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return (await videos.data.response) as IVideo[]
}
