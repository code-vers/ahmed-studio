export default function Banner() {
	return (
		<section className="w-[85%] mx-auto  md:px-0 my-10">
			<div
				className="relative overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat h-180 flex items-center justify-center text-center p-6"
				style={{
					backgroundImage: `url('/images/website/home/banner.png')`,
				}}
			>
				<div className="absolute inset-0 bg-black/50" />

				<div className="relative z-10 max-w-4xl space-y-4">
					<h1 className="text-4xl font-bold text-white md:text-6xl lg:text-7xl">
						Every Archive <br /> Tells A Story
					</h1>

					<div className="space-y-1">
						<p className="text-lg font-medium text-white/90 md:text-xl">
							Professional Audio, Visual, And Film
						</p>
						<p className="text-lg font-medium text-white/90 md:text-xl">
							Digitization For Museums, Archives, And Private Collections
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
