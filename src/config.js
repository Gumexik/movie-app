export const TMDB_BASE_URL = "https://api.themoviedb.org/3/search/movie?query=";
export const TMDB_SINLE_MOVIE_URL = "https://api.themoviedb.org/3/movie/";
export const TMDB_POPULAR_MOVIES_URL =
	"https://api.themoviedb.org/3/movie/popular?language=en-UK&page=1";
export const TMDB_FETCH_OPTIONS = {
	method: "GET",
	headers: {
		accept: "application/json",
		Authorization:
			"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjc1N2M2MGMyYzBjYTc5N2FlYzFjMmMwM2U5ODJhMCIsInN1YiI6IjY0OTg1OWY1YmJkMGIwMDEyNTJiMzUyMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sD0BJJ8K27GKxVohpq_1EJMJHyhr192OYHWaORaH6zY",
	},
};
