/* eslint-disable @next/next/no-img-element */
const PhotoSlidesSection2 = () => {
  return (
    <section className='bg-[#F7F1EC] h-auto my-12 lg:my-32 py-10 sm:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col lg:flex-row items-start lg:items-center justify-between'>
      <div className='flex flex-col sm:flex-col md:flex-col lg:flex-row w-full mx-auto justify-evenly items-center gap-6 lg:gap-0'>
        {/* Images */}
        <div className=''>
          <img
            src='/images/website/about/ph-slide.png'
            alt=''
            className='w-full sm:w-full md:w-full lg:w-auto h-[300px] lg:h-[529px] object-contain'
          />
        </div>

        {/* Text Content */}
        <div className='w-full lg:w-1/2 text-left mt-4 sm:mt-6 md:mt-6 lg:mt-0'>
          <h2 className='text-[32px] sm:text-[36px] md:text-[38px] lg:text-[48px] font-semibold text-[#5D381A] mb-4'>
            Photos Slides
          </h2>
          <p className='text-[#6D5949] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] max-w-full lg:max-w-3xl leading-relaxed'>
            No projector? No problem. We convert your old photo slides into
            modern digital images, making it easy to enjoy your favorite moments
            on any device.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhotoSlidesSection2;
