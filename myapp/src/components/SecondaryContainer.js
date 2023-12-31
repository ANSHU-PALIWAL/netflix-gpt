import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

    const movies = useSelector((store) => store.movies);

    return (
        movies.nowPlayingMovies && (
            <div className='bg-black'>
                <div className='-mt-52 relative z-20 pl-6'>
                    <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
                    <MovieList title={"Trending"} movies={movies.trendingMovies} />
                    <MovieList title={"Popular"} movies={movies.popularMovies} />
                    <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
                    <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
                </div>
            </div>
        )
    );
};

export default SecondaryContainer