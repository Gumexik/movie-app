import { useParams } from "react-router-dom";
import useMovie from "../hooks/useMovie";
import { FadeLoader } from "react-spinners";
import MovieData from "../components/MovieData";

const SingleMovie = () => {
	const movieId = useParams();

	const { movie, isLoading } = useMovie(movieId.singleMovie);
	console.log(movie);

	if (isLoading) {
		return (
			<div className='h-96 w-full flex items-center justify-center'>
				<FadeLoader color='#bd852c' speedMultiplier={2} />
			</div>
		);
	}
	return (
		<div className=' text-white pb-4'>
			<div className='grid md:grid-cols-5 my-4 mx-2 lg:mx-0 gap-6'>
				<img
					src={
						movie?.backdrop_path
							? `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`
							: movie?.poster_path
							? `https://image.tmdb.org/t/p/original/${movie?.poster_path}`
							: `https://www.jakartaplayers.org/uploads/1/2/5/5/12551960/2297419_orig.jpg`
					}
					alt='movie backdrop'
					className={
						movie?.backdrop_path
							? "md:col-span-3 rounded-md border border-white/30"
							: "md:col-span-3 rounded-md border border-white/30 w-80"
					}
				/>
				<div className='md:col-span-2 border border-white/30 rounded-md text-sm '>
					<h4 className='text-center font-bold text-base border-b border-white/30 py-2'>
						Movie Info
					</h4>

					<MovieData title='Original Title' data={movie?.original_title} />
					<MovieData
						title='Original Language'
						data={movie?.original_language}
					/>
					<MovieData title='Release Date' data={movie?.release_date} />
					<MovieData title='Average Vote' data={movie?.vote_average} />
					<MovieData title='Budget' data={movie?.budget} />
					<MovieData title='IMDB ID' data={movie?.imdb_id} />
				</div>
			</div>
			<div className='border border-white/30 rounded-md lg:mx-0 mt-4 mx-2'>
				<h4 className='font-bold border-b border-white/30 text-center py-2'>
					Overview
				</h4>
				<p className='p-2 text-justify'>{movie?.overview}</p>
			</div>
		</div>
	);
};

export default SingleMovie;
