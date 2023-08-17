import MovieDisplay from "../components/MovieDisplay";
import Navigation from "../components/Navigation";

const Home = () => {
	return (
		<div className='bg-[#0b1e25] font-open-sans min-h-screen'>
			<Navigation />
			<div className='max-w-7xl mx-auto'>
				<MovieDisplay />
			</div>
		</div>
	);
};

export default Home;
