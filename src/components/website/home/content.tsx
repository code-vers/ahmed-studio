import { Button } from "@/components/ui/button";
import Image from "next/image";
import HowItWorks from "./howItWorks";
import CoreServices from "./CoreServices";

export default function Content() {
	return (
		<>
			<section className="flex flex-col md:flex-row items-center gap-10 my-10 md:my-20 px-4 md:px-0 container mx-auto">
				{/* Image Container */}
				<div className="w-full md:flex-1">
					<Image
						src="/images/website/home/image2.png"
						alt="Content Image"
						width={400}
						height={420}
						className="w-full h-auto rounded-xl object-cover shadow-md"
					/>
				</div>

				{/* Text Content Container */}
				<div className="w-full md:flex-1 text-center md:text-left">
					<h2 className="text-3xl sm:text-4xl lg:text-6xl text-main font-semibold leading-tight">
						One of the region's most
					</h2>

					<p className="py-5 md:py-7 text-base md:text-lg text-justify md:text-left leading-relaxed">
						Trusted names in audiovisual digitization, preservation, and
						archival consulting in Saudi Arabia. We provide advanced,
						standards-driven solutions for converting and safeguarding legacy
						media, ensuring long-term preservation with the highest levels of
						quality, accuracy, and security. With years of experience and
						collaboration with leading local and international experts, we
						deliver workflows that meet global archival standards. Our mission
						is rooted in a simple belief: every memory deserves to be preserved,
						protected, and passed on to future generations.
					</p>

					<Button className="w-full md:w-auto px-10 md:px-15 py-6 bg-main text-white hover:bg-main/90 transition-all">
						Read More
					</Button>
				</div>
			</section>

			{/* How It Works */}
			<HowItWorks />

			{/* Core Services */}
			<CoreServices />

			{/* Supported Formats  */}
			{/* <section className="bg-normal">

			</section> */}


			

		</>
	);
}
