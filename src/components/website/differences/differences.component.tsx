import AwardCustomIcon from "@/icons/award.icon";
import HandshakeIcon from "@/icons/Handshake.icon";
import SearchCustomIcon from "@/icons/Search.icon";
import { Check, X } from "lucide-react";
import Image from "next/image";

export default function DifferencesComponent() {
	const bestServices = [
		{
			icon: <HandshakeIcon />,
			name: "Built on Trust",
			description:
				"More 5-star reviews than anyone else. We treat your box like our own.",
		},
		{
			icon: <SearchCustomIcon />,
			name: "Honest & Transparent",
			description:
				"Fair pricing, clear workflow and open discussion with clients.",
		},
		{
			icon: <AwardCustomIcon />,
			name: "Undisputed Experts",
			description: "Digitizing since 2017. We've never lost a single memory.",
		},
	];

	const comparisonData = [
		{ feature: "Native Streaming App", ahmed: true, other: false },
		{ feature: "Video Treatment & Restoration", ahmed: true, other: false },
		{ feature: "Best International Practices Workflow", ahmed: true, other: false },
		{ feature: "Home Video Digitization Equipment", ahmed: false, other: true },
		{ feature: "Door To Door Free Pick Up & Delivery", ahmed: true, other: false },
		{ feature: "Raw Capture", ahmed: true, other: false },
		{ feature: "Female staff", ahmed: true, other: true },
		{ feature: "High Capabilities Infrastructure", ahmed: true, other: false },
		{ feature: "All Tapes Format Supported", ahmed: true, other: false },
		{ feature: "URL Shareable Content", ahmed: true, other: false },
		{ feature: "Apple Devices App", ahmed: true, other: false },
		{ feature: "Android Devices App", ahmed: true, other: false },
		{ feature: "USB", ahmed: true, other: true },
	];

	const professionalVShomeData = [
		{ feature: "single bit captured", professional: true, home: false },
		{ feature: "Data loss during capture", professional: false, home: true },
		{ feature: "compressed file", professional: false, home: true },
		{ feature: "international standard", professional: true, home: false },
		{ feature: "Data rate", professional: "Very high", home: "Low" },
		{ feature: "accuracy", professional: true, home: false },
		{ feature: "easy to use", professional: false, home: true },
		{ feature: "maintenance required", professional: "High", home: "Low" },
		{ feature: "cost", professional: "High", home: "Low" },
		{ feature: "required complementary Hardware", professional: true, home: false },
		{ feature: "Hardware complexity", professional: "Hard", home: "Easy" },
		{ feature: "same quality after 100 years", professional: "original quality", home: "loss quality" },
		{ feature: "long term preservation", professional: true, home: false },
		{ feature: "Accepted by Archive institutions", professional: true, home: false },
	];

	const industryVShomeData = [
		{ feature: "Sound quality", industry: true, home: false },
		{ feature: "Video quality", industry: true, home: false },
		{ feature: "signal stabilization", industry: true, home: false },
		{ feature: "Recommended", industry: true, home: false },
		{ feature: "data lost", industry: false, home: true },
		{ feature: "approved by Institution", industry: true, home: false },
	];

	return (
		<>
			{/* Banner */}
			<section className="w-full py-12">
				<div className="w-[85%] mx-auto">
					<div className="h-140 w-full  rounded-xl">
						<Image
							src="/images/website/differences/banner.jpg"
							alt="Banner Image"
							width={1500}
							height={1000}
							priority
							className="object-cover rounded-xl"
						/>
					</div>
				</div>
			</section>

			{/* Intro Section  */}
			<section className="w-full py-12">
				<div className="w-[85%] mx-auto">
					<h2 className="text-5xl font-semibold text-[#7b5308] mb-4 text-center">
						Superior Quality, Service <br /> and Technology
					</h2>

					<p className="text-black/70 text-xl leading-relaxed py-4 text-justify">
						Most companies see a box of old tapes and photos as a technical
						task. At Ahmed Studio, we see them as the heartbeat of your family's
						history. From your parent' wedding day to your own first steps,
						these moments deserve more than just "digitizing"—they deserve a
						revival. We have spent two decades perfecting a process that
						combines white-glove care with industry-leading technology, ensuring
						that your legacy isn't just saved, but is ready to be shared with
						the next generation.
					</p>
				</div>
			</section>

			{/* Superior quality service */}
			<section className="w-full pb-20">
				<div className="w-[85%] mx-auto">
					<div className="flex items-center justify-center p-8">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
							{bestServices.map((service, index) => (
								<div
									key={index}
									className="bg-[#F7F1EC] rounded-2xl p-8 flex flex-col items-center text-center"
								>
									<div className="bg-[#B39174] text-white p-4 rounded-sm my-10">
										{service.icon}
									</div>
									<h3 className="text-[#7a4f09] font-semibold text-xl mb-3">
										{service.name}
									</h3>
									<p className=" text-sm leading-relaxed">
										{service.description}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Comparison */}
			<section className="w-full py-20">
				<div className="w-[85%] mx-auto">
					{/* header */}
					<h2 className="text-5xl font-semibold text-[#7b5308] mb-4 text-center">
						Comparison
					</h2>

					<p className="text-black/70 text-xl leading-relaxed py-4 text-center max-w-4xl mx-auto">
						Not All Digitization is Created Equal. Intro Copy: When you're
						choosing who to trust with your only copies of irreplaceable
						moments, the details matter. Many "bargain" services outsource their
						labor or use automated machines that can eat your tapes. Here is how
						Ahmed Studio stands alone in the industry.
					</p>
					<div className=" py-20">
						{/* Header Row */}
						<div className="grid grid-cols-3 w-full gap-4 py-3">
							<div className="bg-[#D08A0C] text-white text-center py-3 rounded-md font-medium">
								Feature
							</div>

							<div className="bg-[#F2C879] text-black text-center py-3 rounded-md font-medium flex items-center justify-center h-12">
								<Image
									src="/images/logo-sm.png"
									alt="logo"
									height={100}
									width={100}
									className="h-10 w-10 object-cover"
								/>
								Ahmed Studio
							</div>

							<div className="bg-[#E7D5B6] text-black text-center py-3 rounded-md font-medium">
								Other Stores
							</div>
						</div>

						{/* Rows */}
						<div className="space-y-3">
							{comparisonData.map((item) => (
								<div key={item.feature} className="grid grid-cols-3 gap-4">
									{/* Feature */}
									<div className="bg-[#D08A0C] text-white text-center py-3 rounded-md text-sm font-medium">
										{item.feature}
									</div>

									{/* Ahmed Studio */}
									<div className="bg-[#F2C879] flex items-center justify-center py-3 rounded-md">
										{item.ahmed ? (
											<span className="text-green-600 text-xl">
												<Check />
											</span>
										) : (
											<span className="text-red-500 text-xl">
												<X />
											</span>
										)}
									</div>

									{/* Other Stores */}
									<div className="bg-[#E7D5B6] flex items-center justify-center py-3 rounded-md">
										{item.other ? (
											<span className="text-green-600 text-xl">
												<Check />
											</span>
										) : (
											<span className="text-red-500 text-xl">
												<X />
											</span>
										)}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Proffetional vs home digitalization */}
			<section className="w-full mb-20">
				<div className="w-[85%] mx-auto">
					<h2 className=" font-semibold text-[#7b5308] mb-4 text-center text-5xl/14">
						Professional Digitization HW <br /> VS <br /> Home Video
						digitization HW
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
						{/* Image 1 */}
						<div className="w-full overflow-hidden rounded-xl">
							<img
								src="/images/website/differences/image-1.png"
								alt="image"
								height={500}
								width={500}
								className="w-full h-120 object-fit"
							/>
						</div>

						{/* Image 2 */}
						<div className="w-full overflow-hidden rounded-xl">
							<img
								src="/images/website/differences/image-2.png"
								height={500}
								width={500}
								className="w-full h-120 object-fit"
							/>
						</div>
					</div>

					<div className=" py-10">
						{/* Header Row */}
						<div className="grid grid-cols-3 w-full gap-4 py-3">
							<div className="bg-[#D08A0C] text-white text-center py-3 rounded-md font-medium">
								Feature
							</div>

							<div className="bg-[#F2C879] text-black text-center py-3 rounded-md font-medium flex items-center justify-center h-12">
								Professional digitization HWo
							</div>

							<div className="bg-[#E7D5B6] text-black text-center py-3 rounded-md font-medium">
								Home video digitzation HW
							</div>
						</div>

						{/* Rows */}
						<div className="space-y-3">
							{professionalVShomeData.map((item) => (
								<div key={item.feature} className="grid grid-cols-3 gap-4">
									{/* Feature */}
									<div className="bg-[#D08A0C] text-white text-center py-3 rounded-md text-sm font-medium">
										{item.feature}
									</div>

									{/* Professional */}
									<div className="bg-[#F2C879] flex items-center justify-center py-3 rounded-md text-sm font-medium">
										{typeof item.professional === "boolean" ? (
											item.professional ? (
												<span className="text-green-600 text-xl">
													<Check />
												</span>
											) : (
												<span className="text-red-500 text-xl">
													<X />
												</span>
											)
										) : (
											<span className="text-black">{item.professional}</span>
										)}
									</div>

									{/* Home */}
									<div className="bg-[#E7D5B6] flex items-center justify-center py-3 rounded-md text-sm font-medium">
										{typeof item.home === "boolean" ? (
											item.home ? (
												<span className="text-green-600 text-xl">
													<Check />
												</span>
											) : (
												<span className="text-red-500 text-xl">
													<X />
												</span>
											)
										) : (
											<span className="text-black">{item.home}</span>
										)}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Industry VS Home */}
			<section className="w-full mb-20">
				<div className="w-[85%] mx-auto">
					<h2 className=" font-semibold text-[#7b5308] mb-4 text-center text-5xl/14">
						Professional Digitization HW <br /> VS <br /> Home Video
						digitization HW
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
						{/* Image 1 */}
						<div className="w-full overflow-hidden rounded-xl">
							<img
								src="/images/website/differences/image-7.png"
								alt="image"
								height={500}
								width={500}
								className="w-full h-120 object-cover"
							/>
						</div>

						{/* Image 2 */}
						<div className="w-full overflow-hidden rounded-xl">
							<img
								src="/images/website/differences/image-8.png"
								height={500}
								width={500}
								className="w-full h-120 object-cover"
							/>
						</div>
					</div>

					<div className=" py-10">
						{/* Header Row */}
						<div className="grid grid-cols-3 w-full gap-4 py-3">
							<div className="bg-[#D08A0C] text-white text-center py-3 rounded-md font-medium">
								Feature
							</div>

							<div className="bg-[#F2C879] text-black text-center py-3 rounded-md font-medium flex items-center justify-center h-12">
								industry Equiment
							</div>

							<div className="bg-[#E7D5B6] text-black text-center py-3 rounded-md font-medium">
								Home video Equipment
							</div>
						</div>

						{/* Rows */}
						<div className="space-y-3">
							{industryVShomeData.map((item) => (
								<div key={item.feature} className="grid grid-cols-3 gap-4">
									{/* Feature */}
									<div className="bg-[#D08A0C] text-white text-center py-3 rounded-md text-sm font-medium">
										{item.feature}
									</div>

									{/* Ahmed Studio */}
									<div className="bg-[#F2C879] flex items-center justify-center py-3 rounded-md">
										{item.industry ? (
											<span className="text-green-600 text-xl">
												<Check />
											</span>
										) : (
											<span className="text-red-500 text-xl">
												<X />
											</span>
										)}
									</div>

									{/* Other Stores */}
									<div className="bg-[#E7D5B6] flex items-center justify-center py-3 rounded-md">
										{item.home ? (
											<span className="text-green-600 text-xl">
												<Check />
											</span>
										) : (
											<span className="text-red-500 text-xl">
												<X />
											</span>
										)}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className="w-full my-16">
				<div className="w-[85%] mx-auto space-y-20 mt-30">
					{/* Row 1 */}
					<div className="grid grid-cols-1 md:grid-cols-7 gap-10 ">
						{/* Image */}
						<div className="w-full md:col-span-3">
							<Image
								src="/images/website/differences/image-4.jpg"
								alt="Image"
								width={600}
								height={500}
								className="rounded-xl object-cover w-full h-100"
							/>
						</div>

						{/* Content */}
						<div className="md:col-span-4 flex flex-col justify-center">
							<h2 className="text-3xl md:text-6xl font-semibold text-[#765207] mb-6">
								We treat every <br /> shipment like a
							</h2>

							<p className="text-gray-600 mb-6 leading-relaxed">
								National treasure. Since our founding, we have processed over
								Number million memories without losing a single one. Our
								facility is climate-controlled, monitored 24/7, and every item
								is barcoded the moment it arrives, so you can track your
								family’s history through every stage of the journey.
							</p>
						</div>
					</div>

					{/* Row 2 */}
					<div className="grid md:grid-cols-7 gap-10 ">
						{/* Content */}
						<div className="order-2 md:order-1 md: col-span-4 flex flex-col justify-center">
							<h2 className="text-3xl md:text-6xl font-semibold text-[#7A5C1E] mb-6">
								Stop Digging <br /> for Files. Start
							</h2>

							<p className="text-gray-600 mb-6 leading-relaxed">
								Streaming your Life. With other services, your "digital"
								memories end up trapped on a USB drive in a junk drawer or
								buried in a complex cloud folder that is hard to navigate. We
								believe your memories should be as easy to watch as your
								favorite show on Netflix.
							</p>
						</div>

						{/* Image */}
						<div className="order-1 md:order-2 md:col-span-3">
							<Image
								src="/images/website/differences/image-5.png"
								alt="AI enhanced memories"
								width={600}
								height={500}
								className="rounded-xl object-cover w-full h-100"
							/>
						</div>
					</div>

					{/* Row 3 */}
					<div className="grid md:grid-cols-7 gap-10 ">
						{/* Image */}
						<div className="md:col-span-3">
							<Image
								src="/images/website/differences/image-6.jpg"
								alt="AI technology"
								width={600}
								height={500}
								className="rounded-xl object-cover w-full h-100"
							/>
						</div>

						{/* Content */}
						<div className="md: col-span-4 flex flex-col justify-center">
							<h2 className="text-3xl md:text-6xl font-semibold text-[#7A5C1E] mb-6">
								See Your <br /> Memories for the
							</h2>

							<p className="text-gray-600 mb-6 leading-relaxed">
								First Time—Again. Old film fades. Tapes get grainy. Photos lose
								their luster. But they don't have to stay that way. Our
								proprietary AI Name Enhancement technology uses advanced machine
								learning to go beyond simple scanning.
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
