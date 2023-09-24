import { Link } from "react-router-dom";
import { FadeLoader } from "react-spinners";

/* eslint-disable react/prop-types */
const TrendingMovies = ({ popularMovies, isLoading }) => {
	return (
		<div className='text-white px-2'>
			{isLoading && (
				<div className='h-96 w-full flex items-center justify-center'>
					<FadeLoader color='#bd852c' speedMultiplier={2} />
				</div>
			)}
			{popularMovies && (
				<div>
					<div className='grid gap-4 col-span-3 lg:grid-cols-5 place-items-center mt-4 pb-4'>
						{popularMovies?.map((movie, idx) => (
							<div
								key={movie?.id}
								className={`rounded-md overflow-hidden relative
							${idx === 0 ? `col-span-3 lg:col-span-5 row-span-1` : `col-span-1`}
							`}
							>
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
									loading='lazy'
									src={
										idx === 0
											? `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`
											: `https://image.tmdb.org/t/p/original/${movie?.poster_path}`
									}
									alt={`${movie?.title} poster`}
								/>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default TrendingMovies;
