import { Card, CardContent } from "@/components/ui/card";
import DigitizationIcon from "@/icons/DigitizationIcon";
import TruckIcon from "@/icons/TruckIcon";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CoreServices() {
	return (
		<>
			<section className="container mx-auto px-4 py-10">
				<div className="py-10 text-center w-full">
					<p className=" text-main font-semibold text-3xl md:text-4xl ">
						Core Services
					</p>
					<p>Comprehensive solutions for every format in your collection.</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-0">
					{/* Card 1: video digitization */}
					<Card className="ring ring-main/50 h-full">
						<CardContent className="p-6 flex flex-col h-full items-start">
							<span className="bg-main text-white px-2 font-light mb-4">
								VIDEO
							</span>
							<div className="w-full ">
								<Image
									src="/images/website/home/core-services-1.jpg"
									alt="Video"
									width={1000}
									height={800}
									className="rounded-md mb-4 mx-auto w-full"
								/>
							</div>

							<h2 className="text-2xl py-6 ">Consulting</h2>

							<p className="mt-4 text-justify md:text-left">
								Help organizations, institutions, and individuals plan, execute,
								and supervise projects according to international best
								practices.
							</p>

							<ul className="mt-4 space-y-2 list-disc list-inside text-gray-700">
								<li>End-to-end workflow design </li>
								<li>RFP preparation & technical documentation </li>
								<li>Hardware & software selection</li>
								<li>Quality control & project supervision</li>
							</ul>

							<Link
								href="#"
								className="text-main flex items-center mt-auto pt-10"
							>
								LEARN MORE
								<ArrowRight className="font-light ml-2 " strokeWidth={1} />
							</Link>
						</CardContent>
					</Card>

					{/* Card 1: video digitization */}
					<Card className="ring ring-main/50 h-full ">
						<CardContent className="p-6 flex flex-col h-full items-start">
							<span className="bg-secondary/50 text-main px-2 font-light mb-4">
								Consult
							</span>
							<div className="w-full ">
								<Image
									src="/images/website/home/consult.png"
									alt="Video"
									width={1000}
									height={800}
									className="rounded-md mb-4 mx-auto w-full "
								/>
							</div>

							<h2 className="text-2xl py-6 "> Video Digitization</h2>

							<p className="mt-4 text-justify md:text-left">
								Archival grade digitization of video tapes including VHS,
								Betacam, U-matic, and MiniDV.....
							</p>

							<ul className="mt-4 space-y-2 list-disc list-inside text-gray-700">
								<li>RAW master file/High quality video</li>
								<li>Signal processing</li>
								<li>Metadata creation</li>
							</ul>

							<Link
								href="#"
								className="text-main flex items-center mt-auto pt-10"
							>
								LEARN MORE
								<ArrowRight className="font-light ml-2 " strokeWidth={1} />
							</Link>
						</CardContent>
					</Card>

					{/* Card 1: video digitization */}
					<Card className="ring ring-main/50 h-full ">
						<CardContent className="p-6 flex flex-col h-full items-start">
							<span className="bg-secondary/50 text-main px-2 font-light mb-4">
								IMAGE
							</span>
							<div className="w-full ">
								<Image
									src="/images/website/home/core-service-2.png"
									alt="Video"
									width={1000}
									height={800}
									className="rounded-md mb-4 mx-auto w-full"
								/>
							</div>

							<h2 className="text-2xl py-6 ">
								Slides / Negative / Photo Scanning
							</h2>

							<p className="mt-4 text-justify md:text-left">
								We scan every available detail to preserve color, contrast, and
								original image integrity for long-term preservation.
							</p>

							<ul className="mt-4 space-y-2 list-disc list-inside text-gray-700">
								<li>High-resolution</li>
								<li>Dust & defect reduction</li>
								<li>Accurate color reproduction & tonal balance</li>
								<li>Archival formats suitable for future access</li>
							</ul>

							<Link
								href="#"
								className="text-main flex items-center mt-auto pt-10"
							>
								LEARN MORE
								<ArrowRight className="font-light ml-2 " strokeWidth={1} />
							</Link>
						</CardContent>
					</Card>
				</div>
				<div className="flex items-center justify-center w-full py-15 ">
					<Link
						href="#"
						className="py-2 px-10 bg-main rounded-sm text-white hover:bg-main/90"
					>
						View All Services
					</Link>
				</div>
			</section>
			<section className="bg-normal h-20">

			</section>
		</>
	);
}
