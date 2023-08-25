import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import TrendingMovies from "./pages/TrendingMovies";
import ErrorPage from "./pages/ErrorPage";
import SingleMovie from "./pages/SingleMovie";
import Root from "./layout/Root";
import useMovies from "./hooks/useMovies.js";
function App() {
	const {
		setSearchValue,
		movies,
		isLoading,
		setMovies,
		fetchPopularMovies,
		popularMovies,
	} = useMovies();

	const router = createBrowserRouter([
		{
			path: "/",
			element: (
				<Root
					setSearchValue={setSearchValue}
					setMovies={setMovies}
					isLoading={isLoading}
				/>
			),
			errorElement: <ErrorPage />,
			children: [
				{
					path: "/",
					element: (
						<TrendingMovies
							fetchPopularMovies={fetchPopularMovies}
							popularMovies={popularMovies}
							isLoading={isLoading}
						/>
					),
				},
				{
					path: "movies",
					element: <Home movies={movies} isLoading={isLoading} />,
				},
				{
					path: "movies/:singleMovie",
					element: <SingleMovie />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
