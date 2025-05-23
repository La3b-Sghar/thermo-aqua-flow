import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const navigate = useNavigate();

	const handleLogoClick = () => {
		navigate('/');
		setIsOpen(false);
	};

	return (
		<nav className="bg-white shadow-sm px-4 sm:px-6 lg:px-8 py-4 sticky top-0 z-50">
			<div className="container mx-auto flex justify-between items-center">
				{/* Logo with onClick handler */}
				<div
					onClick={handleLogoClick}
					className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity"
				>
					<div className="h-8 w-8 rounded-md flex items-center justify-center animate-pulse-gentle">
						<img src="image.png" alt="logo" />
					</div>
					<span className="text-xl font-bold text-primary">AquaVolt</span>
				</div>

				{/* Desktop Navigation */}
				<div className="hidden md:flex items-center space-x-8">
					<Link
						to="/"
						className="text-gray-700 hover:text-primary transition-colors"
					>
						Home
					</Link>
					<Link
						to="/subscriptions"
						className="text-gray-700 hover:text-primary transition-colors"
					>
						Subscriptions
					</Link>
					<Link
						to="/login"
						className="py-2 px-4 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
					>
						Login
					</Link>
				</div>

				{/* Mobile Navigation Button */}
				<button
					className="md:hidden text-gray-700 focus:outline-none"
					onClick={() => setIsOpen(!isOpen)}
				>
					{isOpen ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					)}
				</button>
			</div>

			{/* Mobile Navigation Menu */}
			{isOpen && (
				<div className="md:hidden pt-4 pb-2 px-2 space-y-3 animate-fade-in">
					<Link
						to="/"
						className="block py-2 px-4 text-gray-700 rounded-md hover:bg-gray-100"
						onClick={() => setIsOpen(false)}
					>
						Home
					</Link>
					<Link
						to="/subscriptions"
						className="block py-2 px-4 text-gray-700 rounded-md hover:bg-gray-100"
						onClick={() => setIsOpen(false)}
					>
						Subscriptions
					</Link>
					<Link
						to="/login"
						className="block py-2 px-4 bg-primary text-white rounded-md hover:bg-primary/90"
						onClick={() => setIsOpen(false)}
					>
						Login
					</Link>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
