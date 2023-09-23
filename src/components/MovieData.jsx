// eslint-disable-next-line react/prop-types
const MovieData = ({ title, data }) => {
	return (
		<div className='flex min-h-6 items-center px-2'>
			<p className='w-1/2'>{title}</p>
			<p className='border-l border-white/30 px-2'>{data}</p>
		</div>
	);
};

export default MovieData;
