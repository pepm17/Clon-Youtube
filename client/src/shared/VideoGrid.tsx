import React from 'react';
import { VideoPreview } from './VideoPreview';

export const VideoGrid = () => {
    let preview = Array.apply(null, new Array(5)).map(()=><VideoPreview />);
    return <>{preview}</>
}