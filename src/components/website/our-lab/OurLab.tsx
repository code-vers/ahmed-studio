import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Play } from "lucide-react";
import Image from "next/image";

const equipmentImages = [
	"/images/website/our-lab/image1.png",
	"/images/website/our-lab/image2.png",
	"/images/website/our-lab/image3.png",
	"/images/website/our-lab/image4.png",
	"/images/website/our-lab/image5.png",
	"/images/website/our-lab/image6.png",
	"/images/website/our-lab/image7.png",
	"/images/website/our-lab/image8.png",
];

export default function OurLabComponent() {
	return (
		<div className="w-full">
			<section className="w-[85%] mx-auto py-10">
				<div className="relative w-full h-125 md:h-150 overflow-hidden rounded-3xl">
					{/* Background Image */}
					<Image
						src="/images/website/our-lab/banner.jpg"
						alt="State of the art lab"
						fill
						className="object-cover -scale-x-100 rounded-xl"
						priority
					/>

					{/* Dark Overlay (optional, to make text pop) */}
					<div className="absolute inset-0" />

					{/* Content Container */}
					<div className="relative h-full flex flex-col justify-center px-8 md:px-16 max-w-3xl text-white bg-linear-to-r from-black to-transparent">
						<h1 className="text-4xl md:text-7xl font-serif font-medium leading-tight mb-4">
							Where Technology Meets Preservation
						</h1>
						<p className="text-lg md:text-lg font-light w-full opacity-90">
							Inside our state-of-the-art lab, your media is digitized using
							advanced equipment and calibrated systems that deliver exceptional
							clarity and detail.
						</p>
					</div>
				</div>
			</section>
			<section className="w-[85%] mx-auto py-10">
				<h2 className="py-10 text-center text-5xl font-semibold">
					Our Equipment
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
					<Card className="bg-normal rounded-xl border-0 ring-0 flex-1">
						<CardContent className="flex flex-col items-center justify-center p-6">
							<p className="h-18 w-18 my-4 bg-red-200 text-red-600 text-center text-4xl font-semibold rounded-full p-4">
								1
							</p>
							<h3 className="text-4xl font-semibold py-8">Full Refurbished</h3>
							<p className="text-2xl text-[#6c6c6c] text-center">
								We make sure each device are fully component replaced to meet
								manifacture specifications.
							</p>
						</CardContent>
					</Card>
					<Card className="bg-normal rounded-xl border-0 ring-0 flex-1">
						<CardContent className="flex flex-col items-center justify-center p-6">
							<p className="h-18 w-18 my-4 bg-red-200 text-red-600 text-center text-4xl font-semibold rounded-full p-4">
								2
							</p>
							<h3 className="text-4xl font-semibold py-8">Calibrated</h3>
							<p className="text-2xl text-[#6c6c6c] text-center">
								Aligned head drum and sound tracking to match manifacture
								reading.
							</p>
						</CardContent>
					</Card>
					<Card className="bg-normal rounded-xl border-0 ring-0 flex-1">
						<CardContent className="flex flex-col items-center justify-center p-6">
							<p className="h-18 w-18 my-4 bg-red-200 text-red-600 text-center text-4xl font-semibold rounded-full p-4">
								3
							</p>
							<h3 className="text-4xl font-semibold py-8">Low Hours</h3>
							<p className="text-2xl text-[#6c6c6c] text-center">
								Replace device by low hours drum is one of most important thing
								to reach highest quality for the data stored in tapes.
							</p>
						</CardContent>
					</Card>
				</div>
			</section>

			<section className="relative w-full py-24 mt-20">
				{/* Background split */}
				<div className="absolute top-0 left-0 w-full h-1/2 bg-normal" />
				<div className="absolute bottom-0 left-0 w-full h-1/2 bg-white" />

				{/* Content */}
				<div className="relative w-[85%] mx-auto">
					{/* Title */}
					<div className="text-center w-full mb-16">
						<h1 className="text-4xl md:text-6xl font-semibold mb-6">
							Our Professional Digitization Equipment
						</h1>

						<p className="text-lg md:text-xl text-gray-600">
							Our studio is equipped with specialized machines for film, video,
							audio, and photo conversion ensuring accurate playback, high
							quality scanning and reliable long term preservation.
						</p>
					</div>

					{/* Image Grid */}
					<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
						{equipmentImages?.map((img, index) => (
							<div
								key={index}
								className="relative w-full h-55 rounded-lg overflow-hidden"
							>
								<Image
									src={img}
									alt="equipment"
									fill
									className="object-cover"
								/>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* <section className="w-full bg-[#F8F8F8]">
				<div className="w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-6">
					<div className="left">
                        <h2>Inside Our Preservation Workflow</h2>
                        <p>This video outlines our structured preservation methodology, including media assessment, stabilization, digitization, and post-processing review. Each step is performed by trained technicians following recognized archival standards to ensure long term integrity and accuracy.</p>
                    </div>
					<div className="right">
                        V
                    </div>
				</div>
			</section> */}
			<section className="w-full bg-[#f8f8f8] mt-10 py-5">
				<div className="w-[85%] mx-auto grid md:grid-cols-2 gap-16 items-center">
					{/* Left Content */}
					<div>
						<h2 className="text-4xl font-semibold text-gray-900 mb-6">
							Inside Our <br /> Preservation Workflow
						</h2>

						<p className="text-gray-600 text-lg leading-relaxed">
							This video outlines our structured preservation methodology,
							including media assessment, stabilization, digitization, and
							post-processing review. Each step is performed by trained
							technicians following recognized archival standards to ensure long
							term integrity and accuracy.
						</p>
					</div>

					{/* Video Preview */}
					<div className="relative w-full h-95 rounded-lg overflow-hidden">
						<Image
							src="/images/website/our-lab/thumbnail.png"
							alt="Workflow Video"
							fill
							className="object-cover h-full w-full"
						/>

						{/* Play Button */}
						<div className="absolute inset-0 flex items-center justify-center">
							<div className="bg-[#a2a2a2] backdrop-blur-md p-5 rounded-full cursor-pointer hover:scale-110 transition">
								<Play className="text-white" size={32} fill="white" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
