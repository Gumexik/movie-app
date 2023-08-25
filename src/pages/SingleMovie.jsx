import { useParams } from "react-router-dom";
import useMovie from "../hooks/useMovie";

const SingleMovie = () => {
	const movieId = useParams();

	const { movie, isLoading } = useMovie(movieId.singleMovie);
	console.log(movie);

	if (isLoading) {
		return <div>Loading...</div>;
	}
	return (
		<div>
			<img
				src={
					movie?.backdrop_path
						? `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`
						: `https://image.tmdb.org/t/p/original/${movie?.poster_path}`
				}
				alt='movie backdrop'
				className={
					movie?.backdrop_path ? "mx-auto my-4 w-3/4" : "mx-auto my-4 w-1/4"
				}
			/>
			<div className='text-white'>{movie?.overview}</div>;
		</div>
	);
};

export default SingleMovie;
