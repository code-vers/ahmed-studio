import Banner from "./banner";
import Content from "./content";
import CoreServices from "./CoreServices";
import HowItWorks from "./howItWorks";

export default function HomeComponent() {
	return (
		<section className="mt-6">
			<Banner />
            <Content />
            <HowItWorks/>
			<CoreServices/>
		</section>
	);
}
