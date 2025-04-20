import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SubscriptionCard from '@/components/SubscriptionCard';
import { Link } from 'react-router-dom';

const Subscriptions = () => {
	// Subscription plans data
	const subscriptionPlans = [
		{
			title: 'Basic',
			price: '18,000 TND initial + 3,500 TND/year',
			description: 'Essential energy generation with Stirling motors',
			features: [
				'Stirling motor installation',
				'Real-time energy monitoring',
				'Remote system management',
				'Maintenance alerts',
				'Basic customer support',
			],
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-8 w-8 text-primary"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M13 10V3L4 14h7v7l9-11h-7z"
					/>
				</svg>
			),
			isPopular: false,
		},
		{
			title: 'Pro',
			price: '35,000 TND initial + 3,500 TND/year',
			description: 'Enhanced package with Aerobee water filtration',
			features: [
				'All Basic features',
				'Phyto water filter system',
				'Water quality monitoring',
				'Contaminant removal tracking',
				'Priority customer support',
				'Quarterly performance reports',
			],
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-8 w-8 text-secondary"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
					/>
				</svg>
			),
			isPopular: true,
		},
	];

	return (
		<div className="min-h-screen flex flex-col">
			<Navbar />

			{/* Hero Section */}
			<section className="bg-gradient-to-br from-primary/10 to-secondary/5 py-20 px-4 sm:px-6 lg:px-8">
				<div className="container mx-auto">
					<div className="max-w-3xl mx-auto text-center">
						<h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
							Our Subscription Plans
						</h1>
						<p className="text-xl text-gray-700 mb-8">
							Choose the perfect plan for your factory's needs and budget
						</p>
					</div>
				</div>
			</section>

			{/* Subscription Plans */}
			<section className="py-20 px-4 sm:px-6 lg:px-8">
				<div className="container mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{subscriptionPlans.map((plan, index) => (
							<div
								key={index}
								className="animate-fade-in"
								style={{ animationDelay: `${index * 150}ms` }}
							>
								<SubscriptionCard {...plan} />
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Features Comparison */}
			<section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
				<div className="container mx-auto">
					<div className="max-w-3xl mx-auto text-center mb-16">
						<h2 className="text-3xl font-bold text-gray-900 mb-6">
							Detailed Features Comparison
						</h2>
						<p className="text-lg text-gray-700">
							Compare our plans to find the right solution for your facility
						</p>
					</div>

					<div className="overflow-x-auto">
						<table className="w-full text-left bg-white rounded-lg shadow-sm">
							<thead>
								<tr className="border-b">
									<th className="py-4 px-6">Feature</th>
									<th className="py-4 px-6 text-center">Basic</th>
									<th className="py-4 px-6 text-center bg-secondary/5">Pro</th>
								</tr>
							</thead>
							<tbody>
								<tr className="border-b">
									<td className="py-4 px-6 font-medium">Stirling Motors</td>
									<td className="py-4 px-6 text-center">
										<svg
											className="h-5 w-5 text-green-500 mx-auto"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path
												fillRule="evenodd"
												d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
												clipRule="evenodd"
											></path>
										</svg>
									</td>
									<td className="py-4 px-6 text-center bg-secondary/5">
										<svg
											className="h-5 w-5 text-green-500 mx-auto"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path
												fillRule="evenodd"
												d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
												clipRule="evenodd"
											></path>
										</svg>
									</td>
								</tr>
								<tr className="border-b">
									<td className="py-4 px-6 font-medium">Energy Monitoring</td>
									<td className="py-4 px-6 text-center">Basic</td>
									<td className="py-4 px-6 text-center bg-secondary/5">
										Advanced
									</td>
								</tr>
								<tr className="border-b">
									<td className="py-4 px-6 font-medium">
										Aerobee Water Filter
									</td>
									<td className="py-4 px-6 text-center">
										<svg
											className="h-5 w-5 text-gray-400 mx-auto"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path
												fillRule="evenodd"
												d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
												clipRule="evenodd"
											></path>
										</svg>
									</td>
									<td className="py-4 px-6 text-center bg-secondary/5">
										<svg
											className="h-5 w-5 text-green-500 mx-auto"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path
												fillRule="evenodd"
												d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
												clipRule="evenodd"
											></path>
										</svg>
									</td>
								</tr>
								<tr className="border-b">
									<td className="py-4 px-6 font-medium">Phytoremediation</td>
									<td className="py-4 px-6 text-center">
										<svg
											className="h-5 w-5 text-gray-400 mx-auto"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path
												fillRule="evenodd"
												d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
												clipRule="evenodd"
											></path>
										</svg>
									</td>
									<td className="py-4 px-6 text-center bg-secondary/5">
										<svg
											className="h-5 w-5 text-gray-400 mx-auto"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path
												fillRule="evenodd"
												d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
												clipRule="evenodd"
											></path>
										</svg>
									</td>
								</tr>
								<tr className="border-b">
									<td className="py-4 px-6 font-medium">
										Water Quality Monitoring
									</td>
									<td className="py-4 px-6 text-center">Basic</td>
									<td className="py-4 px-6 text-center bg-secondary/5">
										Advanced
									</td>
								</tr>
								<tr className="border-b">
									<td className="py-4 px-6 font-medium">Customer Support</td>
									<td className="py-4 px-6 text-center">Email</td>
									<td className="py-4 px-6 text-center bg-secondary/5">
										Email + Phone
									</td>
								</tr>
								<tr className="border-b">
									<td className="py-4 px-6 font-medium">
										Regulatory Compliance
									</td>
									<td className="py-4 px-6 text-center">Basic</td>
									<td className="py-4 px-6 text-center bg-secondary/5">
										Advanced
									</td>
								</tr>
								<tr className="border-b">
									<td className="py-4 px-6 font-medium">Performance Reports</td>
									<td className="py-4 px-6 text-center">Monthly</td>
									<td className="py-4 px-6 text-center bg-secondary/5">
										Weekly
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className="py-20 px-4 sm:px-6 lg:px-8">
				<div className="container mx-auto">
					<div className="max-w-3xl mx-auto">
						<h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
							Frequently Asked Questions
						</h2>

						<div className="space-y-6">
							<div className="bg-white rounded-lg shadow-sm p-6">
								<h3 className="text-xl font-semibold text-gray-900 mb-2">
									How long does installation take?
								</h3>
								<p className="text-gray-700">
									Our installation process typically takes 1-3 weeks depending
									on the size of your facility and the chosen plan. The Basic
									plan has the fastest installation time, while the Master plan
									may take longer due to the phytoremediation system setup.
								</p>
							</div>

							<div className="bg-white rounded-lg shadow-sm p-6">
								<h3 className="text-xl font-semibold text-gray-900 mb-2">
									What maintenance is required?
								</h3>
								<p className="text-gray-700">
									All plans include regular maintenance schedules tailored to
									your system configuration. The Stirling motors require minimal
									maintenance, typically quarterly inspections. Water filtration
									systems require more frequent monitoring, which is included in
									the Pro and Master plans.
								</p>
							</div>

							<div className="bg-white rounded-lg shadow-sm p-6">
								<h3 className="text-xl font-semibold text-gray-900 mb-2">
									Can I upgrade my plan later?
								</h3>
								<p className="text-gray-700">
									Yes, you can upgrade your subscription at any time. Our
									systems are designed with modularity in mind, making it easy
									to add components as your needs evolve. Downgrades are also
									possible at contract renewal points.
								</p>
							</div>

							<div className="bg-white rounded-lg shadow-sm p-6">
								<h3 className="text-xl font-semibold text-gray-900 mb-2">
									What ROI can I expect?
								</h3>
								<p className="text-gray-700">
									Return on investment varies based on your current energy
									costs, wastewater volume, and regulatory requirements.
									Typically, our clients see ROI within 12-36 months. The Basic
									plan focuses on energy savings, while Pro and Master plans add
									value through reduced water treatment costs and regulatory
									compliance.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary text-white">
				<div className="container mx-auto">
					<div className="max-w-3xl mx-auto text-center">
						<h2 className="text-3xl sm:text-4xl font-bold mb-6">
							Start Your Sustainable Journey Today
						</h2>
						<p className="text-xl mb-8 opacity-90">
							Contact our team to discuss the perfect solution for your facility
						</p>
						<Link
							to="/contact"
							className="inline-block py-3 px-8 bg-white text-primary rounded-md hover:bg-opacity-90 transition-colors text-center font-semibold text-lg animate-pulse-gentle"
						>
							Request a Consultation
						</Link>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default Subscriptions;
