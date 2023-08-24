/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

const Root = ({ setSearchValue, isLoading }) => {
	return (
		<div className='bg-[#0b1e25] font-open-sans min-h-screen'>
			<Navigation setSearchValue={setSearchValue} isLoading={isLoading} />
			<div className='max-w-7xl mx-auto'>
				<Outlet />
			</div>
		</div>
	);
};

export default Root;
