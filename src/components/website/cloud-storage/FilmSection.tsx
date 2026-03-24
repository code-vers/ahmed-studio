import Image from "next/image";
import films from "../../../../public/images/website/cloud-storage/films.jpg";

const FilmSection = () => {
  return (
    <section className="bg-[#e9e1d8] py-16 mt-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          
          {/* Left Image */}
          <div className="md:w-1/2 w-full">
            <div className="border-2  p-1">
              <Image
                src={films}
                alt="films"
                className="w-full rounded-2xl h-full object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="md:w-1/2 w-full md:pl-12 mt-8 md:mt-0">
            <div className="border-2 p-8">
              
              <h2 className="heading mb-4">
                Once your <br /> films are digitized
              </h2>

              <p className="subtitle mb-6">
                Magic begins. As Cloud creates a stunning, private online gallery for your entire collection. No more digging through boxes or finding old players—just instant access to your most precious moments.
              </p>

              <div className="text-sm text-gray-700 leading-[160%] space-y-1">
                <p><strong>Smart TV:</strong> Watch on the big screen with our dedicated app.</p>
                <p><strong>Mobile & Tablet:</strong> Carry your memories in your pocket.</p>
                <p><strong>Computer:</strong> High-definition streaming on any browser.</p>
                <p><strong>Secure Storage:</strong> Your original files are protected in our encrypted cloud.</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FilmSection;