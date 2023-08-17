import useMovies from "../hooks/useMovies";

const MovieDisplay = () => {
	const { movies, isLoading } = useMovies();

	return (
		<div className='text-white'>
			{isLoading && <div>Loading...</div>}
			{movies &&
				movies?.map((movie) => {
					return <p key={movie.id}>{movie.title}</p>;
				})}
		</div>
	);
};

export default MovieDisplay;
