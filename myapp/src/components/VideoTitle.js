import React from 'react'
import './VideoTitle.css'
const VideoTitle = ({ title, overview }) => {
    return (
        <div className='maintitle-wh px-12 absolute bg-gradient-to-r from-black'>
            <h1 className='text-6xl font-bold'>{title}</h1>
            <p className='py-6 text-lg w-1/4'>{overview}</p>
            <div className=''>
                <button className='bg-white text-black p-4 px-10 text-xl rounded-lg hover:bg-opacity-50'> <i class="fa-solid fa-play"></i> Play</button>
                <button className=' mx-2 bg-gray-500 text-white p-4 px-10 text-xl bg-opacity-50 rounded-lg'><i class="fa-solid fa-circle-info"></i> More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle