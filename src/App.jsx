import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import TrendingMovies from "./pages/TrendingMovies";
import SingleMovie from "./pages/SingleMovie";
import Root from "./layout/Root";
import useMovies from "./hooks/useMovies.js";
function App() {
	const { setSearchValue, movies, isLoading, setMovies } = useMovies();

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
			children: [
				{
					path: "/",
					element: <Home movies={movies} isLoading={isLoading} />,
				},
				{
					path: ":singleMovie",
					element: <SingleMovie />,
				},
				{
					path: "/trending",
					element: <TrendingMovies />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
