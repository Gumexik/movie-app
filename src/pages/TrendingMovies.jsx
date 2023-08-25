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
					{popularMovies?.map((movie) => (
						<div key={movie?.id}>{movie?.title}</div>
					))}
				</div>
			)}
		</div>
	);
};

export default TrendingMovies;
