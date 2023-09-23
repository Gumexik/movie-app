import MovieCard from "./MovieCard";
import { FadeLoader } from "react-spinners";

/* eslint-disable react/prop-types */
const MovieDisplay = ({ isLoading, movies }) => {
	return (
		<div className='text-white'>
			{isLoading && (
				<div className='h-96 w-full flex items-center justify-center'>
					<FadeLoader color='#bd852c' speedMultiplier={2} />
				</div>
			)}
			<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center gap-4 p-4 lg:px-0 overflow-hidden'>
				{movies &&
					movies?.map((movie) => {
						return <MovieCard key={movie.id} movie={movie} />;
					})}
			</div>
		</div>
	);
};

export default MovieDisplay;
