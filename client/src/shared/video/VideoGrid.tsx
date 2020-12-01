import React from 'react';
import { VideoPreview } from './VideoPreview';
import './VideoGrid.css';
import { VideoGridHeader } from './VideoGridHeader';
import { Divider } from 'semantic-ui-react'
import { IVideoGridHeader } from './video.interface';

export const VideoGrid = (props:IVideoGridHeader) => {
    let preview = Array.apply(null, new Array(15)).map((val,index)=><VideoPreview key={index} />);
    return (
        <>
            <VideoGridHeader title={props.title} />
            <div className="video_grid">{preview}</div>
            <Divider />
        </>
    )
}