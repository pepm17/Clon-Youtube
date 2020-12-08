import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootStore } from '../redux/store'
import { getVideoById } from './video.redux'

export const VideoReproducer = (props: any) => {
  const dispatch = useDispatch()
  const videoState = useSelector((state: RootStore) => state.videos.video)
  useEffect(() => {
    dispatch(getVideoById(props.match.params.id))
  }, [dispatch, props.match.params.id])
  return <> {videoState?.view} </>
}
