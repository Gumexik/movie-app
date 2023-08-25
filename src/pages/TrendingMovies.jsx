import { useEffect } from "react";

/* eslint-disable react/prop-types */
const TrendingMovies = ({ popularMovies, isLoading, fetchPopularMovies }) => {
	useEffect(() => {
		fetchPopularMovies();
	}, []);

	return (
		<div className='text-white px-2'>
			{isLoading && <div>loading...</div>}
			{popularMovies && (
				<div>
					<div className='grid gap-4 col-span-3 lg:grid-cols-5 place-items-center'>
						{popularMovies?.map((movie, idx) => (
							<img
								key={movie?.id}
								className={
									idx === 0
										? `col-span-3 lg:col-span-5 row-span-1`
										: `col-span-1`
								}
								src={
									idx === 0
										? `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`
										: `https://image.tmdb.org/t/p/original/${movie?.poster_path}`
								}
								alt={`${movie?.title} poster`}
							/>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default TrendingMovies;
