import React from 'react';

interface SubscriptionCardProps {
	title: string;
	price: string;
	description: string;
	features: string[];
	icon: React.ReactNode;
	isPopular?: boolean;
}

const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
	title,
	price,
	description,
	features,
	icon,
	isPopular = false,
}) => {
	return (
		<div
			className={`relative bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl ${
				isPopular
					? 'border-2 border-secondary transform hover:-translate-y-1'
					: 'border border-gray-100 hover:-translate-y-0.5'
			}`}
		>
			{isPopular && (
				<div className="absolute top-0 right-0">
					<div className="bg-secondary text-white text-xs uppercase font-semibold py-1 px-3 rounded-bl-lg">
						Popular
					</div>
				</div>
			)}

			<div className="p-6">
				<div className="flex justify-center">
					<div
						className={`h-16 w-16 rounded-full flex items-center justify-center ${
							isPopular ? 'bg-secondary' : 'bg-primary'
						} bg-opacity-10 mb-4`}
					>
						{icon}
					</div>
				</div>

				<h3 className="text-xl font-bold text-center text-gray-800 mb-2">
					{title}
				</h3>

				<div className="text-center mb-4">
					<div className="mb-2">
						<span className="text-2xl font-bold text-gray-900">
							Initial Investment
						</span>
						<p className="text-3xl font-bold text-primary">
							{price.split(' initial')[0]}
						</p>
					</div>
					<div>
						<span className="text-2xl font-bold text-gray-900">
							Yearly Subscription
						</span>
						<p className="text-3xl font-bold text-secondary">
							{price.split('+ ')[1]}
						</p>
					</div>
				</div>

				<p className="text-gray-600 text-center mb-6">{description}</p>

				<ul className="space-y-3 mb-6">
					{features.map((feature, index) => (
						<li key={index} className="flex items-start">
							<svg
								className={`h-5 w-5 mr-2 ${
									isPopular ? 'text-secondary' : 'text-primary'
								}`}
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fillRule="evenodd"
									d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
									clipRule="evenodd"
								></path>
							</svg>
							<span className="text-gray-600">{feature}</span>
						</li>
					))}
				</ul>

				<button
					className={`w-full py-3 font-semibold rounded-md transition-colors ${
						isPopular
							? 'bg-secondary hover:bg-secondary/90 text-white'
							: 'bg-primary hover:bg-primary/90 text-white'
					}`}
				>
					Subscribe
				</button>
			</div>
		</div>
	);
};

export default SubscriptionCard;
