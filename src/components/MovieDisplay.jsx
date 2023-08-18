import MovieCard from "./MovieCard";

/* eslint-disable react/prop-types */
const MovieDisplay = ({ isLoading, movies }) => {
	return (
		<div className='text-white'>
			{isLoading && <div>Loading...</div>}
			<div className='grid grid-cols-5 place-items-center gap-4 p-4 lg:px-0 '>
				{movies &&
					movies?.map((movie) => {
						return <MovieCard key={movie.id} movie={movie} />;
					})}
			</div>
		</div>
	);
};

export default MovieDisplay;
