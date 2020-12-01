import React from 'react';
import { VideoGrid } from './video/VideoGrid';
import './Content.css'

export const Content = () => {
    return (
        <div className="video_content">
            <div className="video_content_container">
                <VideoGrid title={"Title"}/>
                <VideoGrid title={"Title2"}/>
            </div>            
        </div>
    )
}