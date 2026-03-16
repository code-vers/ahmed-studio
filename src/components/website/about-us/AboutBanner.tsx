import Image from "next/image";

const AboutBanner = () => {
  return (
    <section className='relative w-full overflow-hidden h-[240px] sm:h-[320px] md:h-[420px] lg:h-[563px]'>
      <Image
        src='/images/website/about/about-banner.jpg'
        alt='Formats change, Memories stay banner'
        fill
        priority
        className='object-cover'
      />

      <div className='absolute inset-0 bg-black/45 md:bg-black/40' />

      <div className='absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-6 md:px-8'>
        <div className='text-center max-w-[92%] sm:max-w-[700px] md:max-w-[820px] lg:max-w-[980px]'>
          <h1 className='text-white font-semibold text-[28px] leading-[34px] sm:text-[40px] sm:leading-[48px] md:text-[52px] md:leading-[60px] lg:text-[64px] lg:leading-[68px]'>
            Formats change,
            <br />
            Memories stay
          </h1>

          <p className='mt-3 sm:mt-4 md:mt-5 text-white font-normal text-[12px] leading-[18px] sm:text-[15px] sm:leading-[24px] md:text-[18px] md:leading-[28px] lg:text-[24px] lg:leading-[32px] max-w-[320px] sm:max-w-[520px] md:max-w-[720px] lg:max-w-none mx-auto'>
            Old tapes fade, discs scratch, but memories last forever.
            <br className='hidden sm:block' />
            <span className='sm:hidden'> </span>
            Convert your media with us and keep your moments alive in
            <br className='hidden sm:block' />
            <span className='sm:hidden'> </span>
            crystal-clear digital quality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
