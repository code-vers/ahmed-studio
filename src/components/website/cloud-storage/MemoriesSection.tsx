import Image from "next/image";
import films from "../../../../public/images/website/cloud-storage/memories.jpg";

const MemoriesSection = () => {
  return (
    <section className="bg-[#e9e1d8] py-16 mt-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row-reverse items-center">
          
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
Memories are <br />
better when shared
              </h2>

              <p className="subtitle mb-6">
           Every subscription includes 4 Free Guest Accounts, allowing you to invite loved ones across the globe to view, comment, and enjoy your family movies at no extra cost.

              </p>

              <div className="text-sm text-gray-700 leading-[160%] space-y-1">
                <p><strong>4 Free Guests:</strong> Watch on the big screen with our dedicated app.</p>
                <p><strong>Worldwide Access:</strong> Carry your memories in your pocket.</p>
                <p><strong>Private & Secure:</strong> High-definition streaming on any browser.</p>
             
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MemoriesSection;