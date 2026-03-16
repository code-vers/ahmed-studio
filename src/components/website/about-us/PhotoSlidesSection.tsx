import Image from "next/image";

const photoSlideItems = [
  {
    id: 1,
    image: "/images/website/about/photo-slide-1.png",
    alt: "8mm photo slide card",
  },
  {
    id: 2,
    image: "/images/website/about/photo-slide-2.png",
    alt: "16mm photo slide card",
  },
  {
    id: 3,
    image: "/images/website/about/photo-slide-3.png",
    alt: "Super 8 photo slide card",
  },
];

const PhotoSlidesSection = () => {
  return (
    <section className='w-full bg-white py-10'>
      <div className='relative overflow-hidden'>
        <div className='absolute inset-x-0 top-0 h-[315px] bg-[#EEFEFF]' />

        <div className='relative z-10 mx-auto max-w-[1056px] px-4 pt-[18px] pb-[48px] sm:px-6 lg:px-0'>
          <div className='mx-auto text-center'>
            <h2 className='text-[28px] font-semibold leading-[1.2] text-[#1f1f1f] sm:text-[38px] lg:text-[42px]'>
              Photos Slides
            </h2>

            <p className='mx-auto mt-[16px] max-w-[700px] text-[14px] font-normal leading-[1.5] text-[#6f6f6f] sm:text-[16px] lg:text-[16px]'>
              No projector? No problem. We convert your old photo slides into
              modern digital images, making it easy to enjoy your favorite
              moments on any device.
            </p>
          </div>

          <div className='mt-[30px] flex flex-wrap items-start justify-center gap-x-[49px] gap-y-6'>
            {photoSlideItems.map((item) => (
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

export default PhotoSlidesSection;
