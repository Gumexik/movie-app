import { Link } from "react-router-dom";
import search from "../assets/search.svg";

const Navigation = () => {
	return (
		<nav className='bg-black px-8 py-3'>
			<div className='flex justify-between'>
				<div className='flex gap-8 items-center '>
					<h1 className='pr-8 text-lg font-bold text-white  select-none border-r border-white/20 w-fit'>
						Movie Search Application
					</h1>
					<Link to='/' className='text-[#ca854c] uppercase text-sm'>
						Home
					</Link>
					<Link to='/trending' className='text-[#ca854c] uppercase text-sm'>
						Trending
					</Link>
				</div>
				<div className='flex items-center'>
					<label htmlFor='searchInput' className='hidden'>
						Search
					</label>
					<input
						type='text'
						id='searchInput'
						placeholder='Search for movie'
						className='p-2 w-80 rounded outline-none relative'
						autoComplete='off'
					></input>
					<img
						src={search}
						alt='magnifying glass icon'
						width={20}
						className='absolute right-10'
					/>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
