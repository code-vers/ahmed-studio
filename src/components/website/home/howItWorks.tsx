import { Card, CardContent } from "@/components/ui/card";
import CloudUplodCustomIcon from "@/icons/CloudUplodCustomIcon";
import DigitizationIcon from "@/icons/DigitizationIcon";
import OrderIcon from "@/icons/OrderIcon";
import SafelyReturnIcon from "@/icons/SafelyReturnIcon";
import TruckIcon from "@/icons/TruckIcon";

export default function HowItWorks() {
	return (
		<section className="container mx-auto px-4 py-10">
			<p className="pb-10 text-main font-semibold text-3xl md:text-4xl text-center w-full">
				How It Works
			</p>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
				{/* Card 1: Place an order */}
				<Card className="bg-normal border-0 ring-0 h-full">
					<CardContent className="flex flex-col items-center p-6">
						<div className="flex items-center justify-center h-20 w-20 bg-main rounded-xl shadow-lg">
							<OrderIcon className="text-white w-10 h-10" />
						</div>
						<h2 className="text-xl text-main font-semibold py-4 text-center">
							Place an order
						</h2>
						<p className="text-sm text-center">
							Place an order from our store/whatsapp.
						</p>
					</CardContent>
				</Card>

				{/* Card 2: Shipment */}
				<Card className="bg-normal border-0 ring-0 h-full">
					<CardContent className="flex flex-col items-center p-6">
						<div className="flex items-center justify-center h-20 w-20 bg-main rounded-xl shadow-lg">
							<TruckIcon className="text-white w-10 h-10" />
						</div>
						<h2 className="text-xl text-main font-semibold py-4 text-center">
							Shipment
						</h2>
						<p className="text-sm text-center">
							Your shipment will be picked up by our trusted logistic Co.
						</p>
					</CardContent>
				</Card>

				{/* Card 3: Digitization */}
				<Card className="bg-normal border-0 ring-0 h-full">
					<CardContent className="flex flex-col items-center p-6">
						<div className="flex items-center justify-center h-20 w-20 bg-main rounded-xl shadow-lg">
							<DigitizationIcon className="text-white w-10 h-10" />
						</div>
						<h2 className="text-xl text-main font-semibold py-4 text-center">
							Digitization
						</h2>
						<p className="text-sm text-center">
							Professional-grade media conversion with private content handled
							by trained female staff.
						</p>
					</CardContent>
				</Card>

				{/* Card 4: Instant Access */}
				<Card className="bg-normal border-0 ring-0 h-full">
					<CardContent className="flex flex-col items-center p-6">
						<div className="flex items-center justify-center h-20 w-20 bg-main rounded-xl shadow-lg">
							<CloudUplodCustomIcon className="text-white w-10 h-10" />
						</div>
						<h2 className="text-xl text-main font-semibold py-4 text-center">
							Instant Access
						</h2>
						<p className="text-sm text-center">
							View your digitized memories instantly on our secure cloud.
						</p>
					</CardContent>
				</Card>

				{/* Card 5: Safely Returned */}
				<Card className="bg-normal border-0 ring-0 h-full">
					<CardContent className="flex flex-col items-center p-6">
						<div className="flex items-center justify-center h-20 w-20 bg-main rounded-xl shadow-lg">
							<SafelyReturnIcon className="text-white w-10 h-10" />
						</div>
						<h2 className="text-xl text-main font-semibold py-4 text-center">
							Safely Returned
						</h2>
						<p className="text-center text-sm">
							Your original media is returned to you via our tracked truck
							service.
						</p>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
