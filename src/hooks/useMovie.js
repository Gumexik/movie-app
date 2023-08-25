import axios from "axios";
import { TMDB_FETCH_OPTIONS, TMDB_SINLE_MOVIE_URL } from "../config";
import { useEffect, useState } from "react";

const useMovie = (movieId) => {
	const [movie, setMovie] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (movieId) {
			fetchMovie();
		}
	}, []);

	const fetchMovie = async () => {
		setIsLoading(true);
		const result = await axios.get(
			`${TMDB_SINLE_MOVIE_URL}${movieId}`,
			TMDB_FETCH_OPTIONS
		);
		if (result) {
			console.log(result);
			setIsLoading(false);
			setMovie(result?.data);
		} else {
			setIsLoading(true);
		}
	};
	return { movie, isLoading };
};

export default useMovie;
