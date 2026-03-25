/* eslint-disable @next/next/no-img-element */
const AudioTapesSection2 = () => {
  return (
    <section className='bg-[#F7F1EC] h-auto lg:h-100 my-12 lg:my-48 py-10 sm:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col lg:flex-row items-start lg:items-center justify-between'>
      <div className='flex flex-col sm:flex-col md:flex-col lg:flex-row w-full mx-auto justify-evenly items-center gap-6 lg:gap-0'>
        {/* Images */}
        <div className='flex items-center gap-4 lg:gap-0'>
          <img
            src='/images/website/about/audio-tape-grp.png'
            alt=''
            className='w-full sm:w-full md:w-full lg:w-auto h-[300px] lg:h-[529px] object-contain'
          />
          <img
            src='/images/website/about/audio-tape-grp-2.png'
            alt=''
            className='w-full sm:w-full md:w-full lg:w-auto h-[200px] lg:h-[352px] object-contain'
          />
        </div>

        {/* Text Content */}
        <div className='w-full lg:w-1/2 text-left mt-4 sm:mt-6 md:mt-6 lg:mt-0'>
          <h2 className='text-[32px] sm:text-[36px] md:text-[38px] lg:text-[48px] font-semibold text-[#5D381A] mb-4'>
            Audio Tapes
          </h2>
          <p className='text-[#6D5949] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] max-w-full lg:max-w-5xl leading-relaxed'>
            Don’t let your precious audio memories fade away. We convert your
            old cassette and reel-to-reel tapes into high-quality digital files,
            preserving every note, word, and sound for years to come.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AudioTapesSection2;
