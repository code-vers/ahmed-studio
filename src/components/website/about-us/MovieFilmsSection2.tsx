const MovieFilmsSection2 = () => {
  return (
    <section className='bg-[#D6B89F] h-auto lg:h-125 my-12 lg:my-30 py-10 sm:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col lg:flex-row items-start lg:items-center justify-between'>
      <div className='flex flex-col lg:flex-row w-full mx-auto justify-evenly items-center gap-8 lg:gap-0'>
        {/* Left Text */}
        <div className='w-full lg:w-1/2 text-left'>
          <h2 className='text-[32px] sm:text-[40px] lg:text-[48px] font-semibold text-[#5D381A] mb-4'>
            Movie Films
          </h2>
          <p className='text-[#6D5949] text-[16px] sm:text-[20px] lg:text-[24px] max-w-full lg:max-w-5xl leading-relaxed'>
            Old reels, new memories. Convert your 8mm, Super 8, and 16mm films
            into high-quality digital videos perfect for reliving every moment.
          </p>
        </div>

        <div className='w-full lg:w-auto flex justify-center lg:justify-end'>
          <img
            src='/images/website/about/film-grp.png'
            alt=''
            className='w-full max-w-[280px] sm:max-w-[300px] md:max-w-[420px] lg:max-w-none h-auto'
          />
        </div>
      </div>
    </section>
  );
};

export default MovieFilmsSection2;
