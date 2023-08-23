import axios from "axios";
import { useState, useEffect } from "react";
import { TMDB_BASE_URL, TMDB_FETCH_OPTIONS } from "../config";

const useMovies = () => {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [searchValue, setSearchValue] = useState(null);
	const [page, setPage] = useState("&page=1");

	useEffect(() => {
		if (searchValue) {
			fetchMovies(searchValue);
			setSearchValue(null);
		}
	}, [searchValue, page]);

	const fetchMovies = async (searchValue) => {
		setIsLoading(true);
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
	};
	return { movies, fetchMovies, setSearchValue, isLoading, setPage, page };
};

export default useMovies;
