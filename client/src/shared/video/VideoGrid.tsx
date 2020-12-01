import React from 'react';
import { VideoPreview } from './VideoPreview';
import './VideoGrid.css';
import { VideoGridHeader } from './VideoGridHeader';
import { Divider } from 'semantic-ui-react'
export const VideoGrid = () => {
    let preview = Array.apply(null, new Array(15)).map(()=><VideoPreview />);
    return (
        <>
            <VideoGridHeader />
            <div className="video_grid">{preview}</div>
            <Divider />
        </>
    )
}