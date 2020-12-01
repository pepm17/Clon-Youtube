import React, { useState } from 'react';
import { VideoGrid } from './video/VideoGrid';
import './Content.css'
import { InfiniteScroll } from './infiniteScroll/infiniteScroll';

export const Content = () => {

    const [numOfGrids, setNumOfGrids] = useState(2);
    const grids = Array.apply(null, new Array(numOfGrids))
                .map((val, index) => <VideoGrid key={index} title="Title"/>);
    const onCallBack = () => {
        setNumOfGrids((currentState)=> currentState + 1)
    }
    return (
        <InfiniteScroll callback={onCallBack}>
            <div className="video_content">
                <div className="video_content_container">
                    {grids}
                </div>            
            </div>
        </InfiniteScroll>
        
    )
}