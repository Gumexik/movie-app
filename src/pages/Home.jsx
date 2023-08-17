import MovieDisplay from "../components/MovieDisplay";
import Navigation from "../components/Navigation";
import useMovies from "../hooks/useMovies";

const Home = () => {
	const { movies, isLoading, setSearchValue } = useMovies();

	return (
		<div className='bg-[#0b1e25] font-open-sans min-h-screen'>
			<Navigation setSearchValue={setSearchValue} />
			<div className='max-w-7xl mx-auto'>
				<MovieDisplay movies={movies} isLoading={isLoading} />
			</div>
		</div>
	);
};

export default Home;
