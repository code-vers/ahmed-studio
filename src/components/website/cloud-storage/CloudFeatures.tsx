import Image from "next/image";

import feature from "../../../../public/images/website/cloud-storage/feature.png";
import feature1 from "../../../../public/images/website/cloud-storage/feature1.png";
import feature2 from "../../../../public/images/website/cloud-storage/feature2.png";
import feature3 from "../../../../public/images/website/cloud-storage/feature3.png";

const features = [
  {
    title: "Customise Your Gallery",
    description:
      "Add titles and descriptions and chapter markers to each video. Sort and organise to get them in the perfect order. Make the thumbnail images bigger or smaller as you prefer or in the new list view.",
    image: feature,
  },
  {
    title: "Manage Your Sharing",
    description:
      "Create up to 4 additional users who can access your gallery. You remain in complete control, deciding which videos can be viewed by each user.",
    image: feature1,
  },
  {
    title: "AI indexing and video search",
    description:
      "Our Artificial Intelligence analyzes and indexes your video library, letting you search for speech, text, objects, actions and sounds. Search inside your videos and find the moment you are looking for with our unique in-video search.",
    image: feature2,
  },
  {
    title: "Watch Anywhere, Anytime",
    description:
      "We have built some simple to use Apps for Alive Cloud has a free download for phone, tablet or TV. We also support Chromecast and Airplay for pushing your movies to your Smart TV.",
    image: feature3,
  },
];

const CloudFeatures = () => {
  return (
    <section className="mt-16 max-w-7xl mx-auto px-4">
      <h1 className="heading text-center mb-12">Cloud Features</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col gap-4"
          >
            {/* Image */}
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <div>
              <h3 className="text-lg text-[#77510A] font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CloudFeatures;