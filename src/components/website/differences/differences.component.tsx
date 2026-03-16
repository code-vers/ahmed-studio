import { Check } from "lucide-react";
import Image from "next/image";

export default function DifferencesComponent() {
    const bestServices = [
        {
            icon: <Check/>,
            name: "Built on Trust",
            decription: "More 5-star reviews than anyone else. We treat your box like our own."
        },
        {
            icon: <Check/>,
            name: "Honest & Transparent",
            decription: "Fair pricing, clear workflow and open discussion with clients."
        },
        {
            icon: <Check/>,
            name: "Undisputed Experts",
            decription: "Digitizing since 2017. We've never lost a single memory."
        },
    ]
	return (
		<>
			{/* Banner */}
			<section className="w-full py-12">
				<div className="w-[85%] mx-auto">
					<div className="h-140 w-full  rounded-xl">
						<Image
							src="/images/website/defferences/banner.jpg"
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

		</>
	);
}
