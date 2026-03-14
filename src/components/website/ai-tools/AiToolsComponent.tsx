import Image from "next/image";

export default function AiToolsComponent() {
	return (
		<>
			<section className="w-full my-10">
				<div className="relative w-[85%] mx-auto h-120">
					<Image
						src="/images/website/ai-tools/image-1.png"
						alt="Banner Image"
						fill
						className="rounded-2xl object-cover"
					/>
				</div>
			</section>
			<section className="w-full my-10">
				<div className="w-[85%] mx-auto">
					<h2 className="font-semibold text-5xl text-center text-[#785109] py-5 mt-20">
						The Dawn of Your <br /> New Family History
					</h2>
					<p className="text-[#3c3c3c] text-xl text-justify">
						We believe your memories are irreplaceable. That's why we've
						combined twenty years of digitization expertise with the most
						advanced AI technology in the world. From our secure SafeShip
						process to our 100% satisfaction guarantee, we treat your tapes and
						photos as if they were our own. Join over 1 million happy customers
						who have seen their past transformed. It's time to stop just
						"keeping" your memories and start truly seeing them-clearer,
						brighter, and more beautiful than before.
					</p>
				</div>
			</section>

			<section className="w-full my-16">
				<div className="w-[85%] mx-auto space-y-20 mt-30">
					{/* Row 1 */}
					<div className="grid grid-cols-1 md:grid-cols-7 gap-10 ">
						{/* Image */}
						<div className="w-full md:col-span-3">
							<Image
								src="/images/website/ai-tools/image2.png"
								alt="Memory enhancement"
								width={600}
								height={500}
								className="rounded-xl object-cover"
							/>
						</div>

						{/* Content */}
						<div className="md:col-span-4">
							<h2 className="text-3xl md:text-6xl font-semibold text-[#7A5C1E] mb-6">
								Yesterday’s tools captured your stories
							</h2>

							<p className="text-gray-600 mb-6 leading-relaxed">
								McKenzie AI brings them to life. As the most innovative solution in memory preservation, McKenzie resolves the limitations of decades-old technology to show you every detail as it really happened.
							</p>

							<div className="space-y-4 text-gray-600">
								<p>
									<strong>3X Visual Clarity:</strong> Get up to three times the visual clarity compared to the original video or photo.
								</p>

								<p>
									<strong>Custom Training:</strong> The first truly custom AI
									solution trained to enhance specific formats from VHS tapes to
									Super 8 films.
								</p>

								<p>
									<strong>Intelligent Assessment:</strong> Instantly assesses
									where to add sharpness and remove imperfections while
									preserving a natural look.
								</p>
							</div>
						</div>
					</div>

					{/* Row 2 */}
					<div className="grid md:grid-cols-7 gap-10 ">
						{/* Content */}
						<div className="order-2 md:order-1 md: col-span-4">
							<h2 className="text-3xl md:text-6xl font-semibold text-[#7A5C1E] mb-6">
								McKenzie™ is a custom AI solution
							</h2>

							<p className="text-gray-600 mb-6 leading-relaxed">
								Designed to enhance specific memories by understanding the
								unique properties of various video formats, such as VHS tapes
								and Super 8 films.
							</p>

							<div className="space-y-4 text-gray-600">
								<p>
									<strong>Quality & Clarity:</strong> Enhanced quality, sharper
									detail, and crisper video clarity.
								</p>

								<p>
									<strong>Color & Light:</strong> Better color accuracy, more
									vibrant colors, and cleaner visuals in low-light conditions.
								</p>

								<p>
									<strong>Motion & Detail:</strong> Smoother playback, reduced
									motion blur, and refined facial details.
								</p>
							</div>
						</div>

						{/* Image */}
						<div className="order-1 md:order-2 md:col-span-3">
							<Image
								src="/images/website/ai-tools/image3.png"
								alt="AI enhanced memories"
								width={600}
								height={500}
								className="rounded-xl object-cover w-full"
							/>
						</div>
					</div>

					{/* Row 3 */}
					<div className="grid md:grid-cols-7 gap-10 ">
						{/* Image */}
						<div className="md:col-span-3">
							<Image
								src="/images/website/ai-tools/image4.png"
								alt="AI technology"
								width={600}
								height={500}
								className="rounded-xl object-cover w-full"
							/>
						</div>

						{/* Content */}
						<div className="md: col-span-4">
							<h2 className="text-3xl md:text-6xl font-semibold text-[#7A5C1E] mb-6">
								McKenzie™ is trained to understand
							</h2>

							<p className="text-gray-600 mb-6 leading-relaxed">
								The unique properties of various analog formats, ranging from
								VHS tapes to Super 8 films. It performs instant assessments to
								improve the following:
							</p>

							<div className="space-y-4 text-gray-600">
								<p>
									<strong>Clarity:</strong> Adds sharpness and creates crisper
									video clarity.
								</p>

								<p>
									<strong>Correction:</strong> Removes imperfections and reduces
									motion blur caused by camera movement.
								</p>

								<p>
									<strong>Preservation:</strong> Enhances the power of moments
									while preserving the natural look and feel of the original
									memories.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
