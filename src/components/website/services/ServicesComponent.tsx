"use client"
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import RequestQuoteDialog from "./RequestQuoteDialog";
import { useState } from "react";

export default function ServicesComponent() {
     const [openDialog, setOpenDialog] = useState(false);
     
	return (
		<>
			<section className="w-full py-12">
				<div className="w-[85%] mx-auto">
					<div className="relative h-140 w-full overflow-hidden rounded-lg">
						<Image
							src="/images/website/services/banner.png"
							alt="Preserving memories"
							fill
							priority
							className="object-cover"
						/>

						<div className="absolute inset-0 bg-black/40" />

						<div className="absolute inset-0 flex items-center bg-linear-to-r from-black/80 to-transparent">
							<div className="max-w-[60%] text-white pl-10 ">
								<h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-4">
									Preserving <br /> Memories for the Future
								</h1>

								<p className="text-gray-200 text-sm md:text-base">
									Ahmed Studio offers professional digitization and consulting
									services for audio, video, photos, and film designed to
									protect your archives and ensure long-term access.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="w-full py-12">
				<div className="w-[85%] mx-auto">
					<h2 className="text-5xl font-semibold text-[#7b5308] mb-4 text-center">
						Preserving What Matters Most
					</h2>

					<p className="text-black/70 text-xl leading-relaxed py-4">
						Your memories are irreplaceable. At Ahmed Studio, we specialize in
						digitizing, restoring, and preserving audio, video, film, and
						photographic materials with the highest level of precision and care.
						Every project is handled by experienced professionals who understand
						the emotional and historical value behind each recording, image, and
						frame.
					</p>

					<p className="text-black/70 text-xl leading-relaxed">
						Using advanced technology and carefully controlled processes, we
						ensure that fragile and aging media is protected, enhanced, and
						converted into high-quality digital formats. From family memories to
						valuable archives, our goal is to preserve authenticity while
						improving clarity, stability, and longevity—so your memories can be
						safely stored, easily shared, and enjoyed for generations to come.
					</p>
				</div>
			</section>

			{/* All services */}
			<section className="w-full pt-16">
				<div className="w-[85%] mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-0">
						{/* Card : video digitization */}
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
									Help organizations, institutions, and individuals plan,
									execute, and supervise projects according to international
									best practices.
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

						{/* Card: AUDIO  Digitalization*/}
						<Card className="ring ring-main/50 h-full ">
							<CardContent className="p-6 flex flex-col h-full items-start">
								<span className="bg-secondary/50 text-main px-2 font-light mb-4">
									AUDIO
								</span>
								<div className="w-full ">
									<Image
										src="/images/website/services/audio.jpg"
										alt="Video"
										width={1000}
										height={800}
										className="rounded-md mb-4 mx-auto w-full"
									/>
								</div>

								<h2 className="text-2xl py-6 ">Audio Digitization</h2>

								<p className="mt-4 text-justify md:text-left">
									Professional Transfer of Analog Audio formats including 1/4''
									tape, cassettes, and vinyl to ....{" "}
								</p>

								<ul className="mt-4 space-y-2 list-disc list-inside text-gray-700">
									<li>24-bit / 96KHZ </li>
									<li>Sound Restoration </li>
									<li>WAV/Flac</li>
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

						{/* Card : Film Scanning */}
						<Card className="ring ring-main/50 h-full ">
							<CardContent className="p-6 flex flex-col h-full items-start">
								<span className="bg-secondary/50 text-main px-2 font-light mb-4">
									FILM
								</span>
								<div className="w-full ">
									<Image
										src="/images/website/services/film.jpg"
										alt="Video"
										width={1000}
										height={800}
										className="rounded-md mb-4 mx-auto w-full "
									/>
								</div>

								<h2 className="text-2xl py-6 ">Film Scanning</h2>

								<p className="mt-4 text-justify md:text-left">
									Frame-by-frame scanning of 8mm, 16mm, and 35mm film reels up
									to 4k resolution.
								</p>

								<ul className="mt-4 space-y-2 list-disc list-inside text-gray-700">
									<li>SD / HD / FHD / 4K</li>
									<li>Accurate scanning</li>
									<li>Film cleaning</li>
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

						{/* Card : Image */}
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
									We scan every available detail to preserve color, contrast,
									and original image integrity for long-term preservation.
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

						{/* Card : Consult */}
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

						{/* Card : Enhancement & Restoration */}
						<Card className="ring ring-main/50 h-full ">
							<CardContent className="p-6 flex flex-col h-full items-start">
								<span className="bg-secondary/50 text-main px-2 font-light mb-4">
									Enhancement & Restoration
								</span>
								<div className="w-full ">
									<Image
										src="/images/website/services/enhancement.jpg"
										alt="Video"
										width={1000}
										height={800}
										className="rounded-md mb-4 mx-auto w-full "
									/>
								</div>

								<h2 className="text-2xl py-6 "> Enhancement & Restoration</h2>

								<p className="mt-4 text-justify md:text-left">
									Professional enhancement and restoration of photos, videos,
									and audio to recover clarity, stability, and detail while
									respecting the authenticity of the original content.
								</p>

								<ul className="mt-4 space-y-2 list-disc list-inside text-gray-700">
									<li>Image, video, and audio enhancement</li>
									<li>Noise, dust, scratch & flicker reduction</li>
									<li>Color correction & exposure balancing</li>
									<li>Preservation-safe outputs alongside original </li>
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
						<button 
                            onClick={() => setOpenDialog(true)}
							className="py-2 px-10 bg-main rounded-sm text-white hover:bg-main/90"
						>
							Request A Quote
						</button>
					</div>
                    {/* Request Quote dialog */}
                     <RequestQuoteDialog
                        open={openDialog}
                        onOpenChange={setOpenDialog}
                    />
				</div>
			</section>
		</>
	);
}
