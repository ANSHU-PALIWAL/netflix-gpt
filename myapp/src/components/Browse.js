import Header from './Header'
import SecondaryContainer from './SecondaryContainer';
import MainContainer from './MainContainer';
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useTrendingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse