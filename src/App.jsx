import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import TrendingMovies from "./pages/TrendingMovies";
import SingleMovie from "./pages/SingleMovie";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Home />,
			children: [
				{
					path: ":singleMovie",
					element: <SingleMovie />,
				},
			],
		},

		{
			path: "/trending",
			element: <TrendingMovies />,
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
