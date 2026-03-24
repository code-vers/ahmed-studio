import Image from "next/image";
import films from "../../../../public/images/website/cloud-storage/message.jpg";

const MessageSection = () => {
  return (
    <section className="bg-[#e9e1d8] py-16 mt-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          
          {/* Left Image */}
          <div className="md:w-1/2 w-full">
            <div className="  p-1">
              <Image
                src={films}
                alt="films"
                className="w-full rounded-2xl h-full object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="md:w-1/2 w-full md:pl-12 mt-8 md:mt-0">
            <div className=" p-8">
              
              <h2 className="heading mb-4">
      We’ve streamlined <br />
the journey from
              </h2>

              <p className="subtitle mb-6">
              We’ve streamlined the journey from 'old box' to 'online gallery' to be as effortless as possible for you. First, our specialist technicians use broadcast-grade equipment to digitize your media with meticulous care.
              </p>

              <div className="text-sm text-gray-700 leading-[160%] space-y-1">
                <p><strong>The Digitization:</strong>We professionally transfer your old tapes and films using industry-leading technology.</p>
                <p><strong>The Notification:</strong>Upon completion of your job, we’ll send you an email to let you know your FREE online gallery is available.</p>
                <p><strong>The Celebration:</strong> Log in and start your 14-day free trial. Watch, share, and enjoy!</p>
            
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MessageSection;