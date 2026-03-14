import Banner from "./banner";
import Content from "./content";

export default function HomeComponent() {
	return (
		<section className="w-full">
			<Banner />
			<Content />
		</section>
	);
}
