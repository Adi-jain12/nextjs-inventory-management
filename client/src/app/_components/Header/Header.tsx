type Props = {
	name: string;
	imageUrl: string;
};

const Header = ({ name, imageUrl }: Props) => {
	return (
		<header className="flex items-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-4 rounded-lg shadow-lg">
			<img
				src={imageUrl}
				alt={name}
				className="w-12 h-12 rounded-full mr-4 border-2 border-white"
			/>
			<h1 className="text-3xl font-bold text-white tracking-wide">{name}</h1>
		</header>
	);
};

export default Header;
