import Image from "next/image";

const dvdItems = [
  {
    id: 1,
    image: "/images/website/about/dvd-card-1.png",
    alt: "DVDs card",
  },
  {
    id: 2,
    image: "/images/website/about/dvd-card-2.png",
    alt: "Mini DVDs card",
  },
];

const DvdsMiniDvdsSection = () => {
  return (
    <section className='w-full bg-white py-10'>
      <div className='relative overflow-hidden'>
        <div className='absolute inset-x-0 top-0 h-[300px] bg-[#FFFEEE]' />

        <div className='relative z-10 mx-auto max-w-[1056px] px-4 pt-[20px] pb-[40px] sm:px-6 lg:px-0'>
          <div className='mx-auto text-center'>
            <h2 className='text-[28px] font-semibold leading-[1.2] text-[#202020] sm:text-[38px] lg:text-[42px]'>
              DVDs &amp; Mini DVDs
            </h2>

            <p className='mx-auto mt-[16px] max-w-[760px] text-[14px] font-normal leading-[1.55] text-[#727272] sm:text-[16px] lg:text-[16px]'>
              No more broken discs or outdated players. We convert your DVDs and
              Mini DVDs into modern digital video files that are easy to save,
              share, and enjoy on any device.
            </p>
          </div>

          <div className='mt-[28px] flex flex-wrap items-start justify-center gap-x-[50px] gap-y-6'>
            {dvdItems.map((item) => (
              <div key={item.id} className='relative h-[194px] w-[149px]'>
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className='object-contain'
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DvdsMiniDvdsSection;
