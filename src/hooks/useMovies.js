import axios from "axios";
import { useState, useEffect } from "react";
import { TMDB_BASE_URL, TMDB_FETCH_OPTIONS } from "../config";

const useMovies = () => {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [searchValue, setSearchValue] = useState(null);

	useEffect(() => {
		if (searchValue) {
			fetchMovies(searchValue);
		}
	}, [searchValue]);

	const fetchMovies = async (searchValue) => {
		setIsLoading(true);
		const result = await axios.get(
			`${TMDB_BASE_URL}${searchValue}`,
			TMDB_FETCH_OPTIONS
		);
		if (result) {
			setIsLoading(false);
			setMovies(result.data.results);
			console.log(movies);
		} else {
			setIsLoading(true);
		}
	};
	return { movies, fetchMovies, setSearchValue, isLoading };
};

export default useMovies;
