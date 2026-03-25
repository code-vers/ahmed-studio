/* eslint-disable @next/next/no-img-element */
const VideoTapesSection2 = () => {
  return (
    <section className='bg-white py-16 relative px-6 sm:px-10 lg:px-24 mb-48'>
      <div className='max-w-5xl mx-auto'>
        {/* Left Text */}
        <div className='max-w-7xl text-left'>
          <h2 className='text-[32px] sm:text-[40px] lg:text-[48px] font-semibold text-[#5D381A] mb-4'>
            Video Tapes
          </h2>
          <p className='text-[#6D5949] text-[16px] sm:text-[18px] lg:text-[24px] leading-relaxed'>
            our old VHS, MiniDV, Hi8, and camcorder tapes <br /> won’t last
            forever but your memories can. <br /> We carefully digitize your
            video tapes <br /> into high-quality digital files, <br />
            preserving every moment <br /> with clarity, safety and <br /> care.
          </p>
        </div>

        {/* Right Grid */}
        <div className='absolute -bottom-28 left-[450px]'>
          <img
            src='/images/website/about/vid-tape.png'
            className='h-[460px]'
            alt=''
          />
        </div>
      </div>
    </section>
  );
};

export default VideoTapesSection2;
