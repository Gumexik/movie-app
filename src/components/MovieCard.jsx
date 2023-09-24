import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const MovieCard = ({ movie }) => {
	return (
		<div className=' rounded-md overflow-hidden relative w-full h-full'>
			<div className='top-0 left-0 h-full w-full hover:bg-black/70 transition-all duration-200 absolute p-4 opacity-0 hover:opacity-100 flex justify-center'>
				<div>
					<p className='text-lg font-bold select-none text-center'>
						{movie.title}
					</p>
					<p className='text-sm mt-12 select-none hidden md:block text-justify'>
						{movie.overview.length > 150
							? `${movie.overview.slice(0, 160)}...`
							: movie.overview}
					</p>
				</div>
				<Link
					to={`/movies/${movie.id}`}
					className='text-sm absolute bottom-5 px-4 py-2 bg-yellow-700 rounded-md mx-auto'
				>
					Read More
				</Link>
			</div>
			<img
				src={
					movie.poster_path
						? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
						: `https://www.jakartaplayers.org/uploads/1/2/5/5/12551960/2297419_orig.jpg`
				}
				alt='movie poster'
				className='w-full object-contain'
			/>
		</div>
	);
};

export default MovieCard;
