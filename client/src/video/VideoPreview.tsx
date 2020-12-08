import React from 'react'
import { Image } from 'semantic-ui-react'
import './VideoPreview.css'
import PreviewImage from '../asset/image/preview.jpg'
import { IVideo } from './video.interface'
import { formatShortString } from '../utils/number'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

TimeAgo.addLocale(en);
const timeAgo: TimeAgo = new TimeAgo();

export const VideoPreview = (props: IVideo) => {
  return (
    <div className="video_preview">
      <div className="video_image">
        <Image src={PreviewImage} />
        <div className="video_timestamp">
          <span>11:38</span>
        </div>
      </div>
      <div className="video_info">
        <div>{props.title}</div>
        <div className="video_basic_info">
          <div className="video_channel">{props.postedBy.username}</div>
          <div className="video_view_time">{formatShortString(props.view)} views {timeAgo.format(new Date (props.updatedAt))} </div>
        </div>
      </div>
    </div>
  )
}
