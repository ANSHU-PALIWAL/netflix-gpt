import React from 'react'
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';
import './VideoBackground.css'

const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
    useMovieTrailer(movieId);

    return (
        <div className='main-wh'>
            <iframe
                className='child-wh'
                src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&loop=1&mute=1&controls=0&cc_load_policy=1"}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            >
            </iframe>
        </div>
    )
}

export default VideoBackground