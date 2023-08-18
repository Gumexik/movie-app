/* eslint-disable react/prop-types */
const MovieDisplay = ({ isLoading, movies }) => {
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
