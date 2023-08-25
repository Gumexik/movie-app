import axios from "axios";
import { useState, useEffect } from "react";
import {
	TMDB_BASE_URL,
	TMDB_FETCH_OPTIONS,
	TMDB_POPULAR_MOVIES_URL,
} from "../config";

const useMovies = () => {
	const [movies, setMovies] = useState([]);
	const [popularMovies, setPopularMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [searchValue, setSearchValue] = useState(null);
	const [page, setPage] = useState("&page=1");

	useEffect(() => {
		fetchPopularMovies();
		console.log(popularMovies);
	}, []);

	useEffect(() => {
		if (searchValue) {
			if (movies.length > 1) {
				setMovies([]);
				fetchMovies(searchValue);
				setSearchValue(null);
			} else {
				fetchMovies(searchValue);
				setSearchValue(null);
			}
		}
	}, [searchValue, page]);

	const fetchMovies = async (searchValue) => {
		setIsLoading(true);
		setTimeout(async () => {
			const result = await axios.get(
				`${TMDB_BASE_URL}${searchValue}${page}`,
				TMDB_FETCH_OPTIONS
			);
			if (result) {
				setIsLoading(false);
				setMovies(result?.data?.results);
			} else {
				setIsLoading(true);
			}
		}, 1000);
	};

	const fetchPopularMovies = async () => {
		const result = await axios.get(TMDB_POPULAR_MOVIES_URL, TMDB_FETCH_OPTIONS);
		if (result) {
			setPopularMovies(result?.data?.results);
		}
	};
	return {
		movies,
		setSearchValue,
		isLoading,
		setPage,
		page,
	};
};

export default useMovies;
