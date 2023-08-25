/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import search from "../assets/search.svg";
import { useState } from "react";

const Navigation = ({ setSearchValue, isLoading }) => {
	const [searchInput, setSearchInput] = useState("");
	const navigate = useNavigate();

	const handleSubmit = (e, searchInput) => {
		e.preventDefault();
		setSearchValue(searchInput);
		setSearchInput("");
		navigate("/movies");
	};

	return (
		<nav className='bg-black px-8 py-3'>
			<div className='flex flex-col md:flex-row justify-between gap-4 md:-gap-0'>
				<div className='flex gap-8 items-center justify-center'>
					<h1 className='pr-8 text-lg font-bold text-white  select-none border-r border-white/20 w-fit'>
						Movie Search Application
					</h1>
					<Link to='/' className='text-[#ca854c] uppercase text-sm'>
						Home
					</Link>
				</div>
				<form
					onSubmit={(e) => handleSubmit(e, searchInput)}
					className='flex items-center justify-center'
				>
					<label htmlFor='searchInput' className='hidden'>
						Search
					</label>
					<input
						type='text'
						id='searchInput'
						placeholder={isLoading ? "Loading results..." : "Search for movie"}
						className='p-2 w-full md:w-80 rounded outline-none relative'
						autoComplete='off'
						value={searchInput}
						disabled={isLoading ? true : false}
						onChange={(e) => {
							setSearchInput(e.target.value);
						}}
					></input>
					<img
						src={search}
						alt='magnifying glass icon'
						width={20}
						className='absolute right-10'
					/>
				</form>
			</div>
		</nav>
	);
};

export default Navigation;
