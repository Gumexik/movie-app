/* eslint-disable react/prop-types */
import MovieDisplay from "../components/MovieDisplay";

const Home = ({ movies, isLoading }) => {
	return <MovieDisplay movies={movies} isLoading={isLoading} />;
};

export default Home;
