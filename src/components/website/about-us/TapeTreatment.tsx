/* eslint-disable @next/next/no-img-element */
const TapeTreatment = () => {
  return (
    <section className='bg-[#DFBFA4] h-auto lg:h-[450px] my-12 lg:my-32 py-10 sm:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col lg:flex-row items-start lg:items-center justify-between'>
      <div className='flex flex-col sm:flex-col md:flex-col lg:flex-row w-full mx-auto justify-evenly items-center gap-6 lg:gap-0'>
        {/* Images */}
        <div className=''>
          <img
            src='/images/website/about/tape-grp.png'
            alt=''
            className='w-full sm:w-full md:w-full lg:w-auto h-[300px] lg:h-[529px] object-contain'
          />
        </div>

        {/* Text Content */}
        <div className='w-full lg:w-1/2 text-left mt-4 sm:mt-6 md:mt-6 lg:mt-0'>
          <h2 className='text-[32px] sm:text-[36px] md:text-[38px] lg:text-[48px] font-semibold text-[#5D381A] mb-4'>
            Tape Treatment
          </h2>
          <p className='text-[#6D5949] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] max-w-full lg:max-w-5xl leading-relaxed'>
            Focuses on addressing abnormalities that have developed over time,
            such as mold contamination, physical damage, or deterioration of the
            tape and its casing. When mold is present, we carefully clean and
            stabilize the tape to prevent information loss and ensure safe
            playback. The goal of tape treatment is to give aging or damaged
            tapes a new chance—allowing us to safely extract the original video
            and audio with minimal risk and maximum accuracy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TapeTreatment;
