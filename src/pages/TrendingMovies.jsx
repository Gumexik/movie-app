import { useEffect } from "react";

/* eslint-disable react/prop-types */
const TrendingMovies = ({ popularMovies, isLoading, fetchPopularMovies }) => {
	useEffect(() => {
		fetchPopularMovies();
	}, []);

	return (
		<div className='text-white'>
			{isLoading && <div>loading...</div>}
			{popularMovies && (
				<div>
					<div className='grid gap-4 grid-cols-5 '>
						{popularMovies?.map((movie, idx) => (
							<img
								key={movie?.id}
								className={idx === 0 ? `col-span-5 row-span-1` : `col-span-1`}
								src={
									idx === 0
										? `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`
										: `https://image.tmdb.org/t/p/original/${movie?.poster_path}`
								}
								alt={`${popularMovies[0]?.title} poster`}
							/>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default TrendingMovies;
