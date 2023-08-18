/* eslint-disable react/prop-types */
const MovieCard = ({ movie }) => {
	return (
		<div className='w-48 bg-red-300 rounded-md overflow-hidden'>
			<img
				src={
					movie.poster_path
						? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
						: `https://www.jakartaplayers.org/uploads/1/2/5/5/12551960/2297419_orig.jpg`
				}
				alt='movie poster'
				className=''
			/>
		</div>
	);
};

export default MovieCard;
