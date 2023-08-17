import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import "./index.css";
import TrendingMovies from "./pages/TrendingMovies";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Home />,
		},
		{
			path: "/trending",
			element: <TrendingMovies />,
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
