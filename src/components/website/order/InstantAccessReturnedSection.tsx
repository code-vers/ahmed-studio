import Image from "next/image";

const InstantAccessReturnedSection = () => {
  return (
    <section className='relative w-full overflow-hidden'>
      {/* Top white block */}
      <div className='w-full bg-white py-10 sm:py-14 md:py-16 lg:py-20'>
        <div className='mx-auto max-w-[1440px]'>
          <div className='grid items-center gap-10 px-5 sm:px-6 md:grid-cols-[1fr_380px] md:gap-8 md:px-8 lg:min-h-[276px] lg:grid-cols-[1fr_500px] lg:gap-10 lg:px-[58px] lg:py-0 xl:grid-cols-[1fr_540px]'>
            <div />

            <div className='max-w-full lg:max-w-[460px]'>
              <div className='flex items-start gap-3 sm:gap-4 lg:gap-[18px]'>
                <span className='shrink-0 text-[56px] font-semibold leading-[0.9] text-[#8b6518] sm:text-[68px] md:text-[78px] lg:text-[96px]'>
                  4.
                </span>

                <h2 className='pt-[4px] text-[26px] font-semibold leading-[1.05] text-[#8b6518] sm:text-[30px] md:text-[32px] lg:pt-[6px] lg:text-[36px]'>
                  Instant
                  <br />
                  Access
                </h2>
              </div>

              <p className='mt-5 max-w-full text-[15px] font-normal leading-[1.65] text-[#6C6C6C] sm:text-[17px] md:text-[16px] lg:mt-[20px] lg:max-w-[390px] lg:text-[20px] lg:leading-[1.6]'>
                You can get instant access to your digitized files through our
                secure online delivery system. Once your project is completed,
                we send you a private download link allowing you to view and
                access your files immediately from any device.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom beige block */}
      <div className='w-full bg-[#F8F8F8] py-10 sm:py-14 md:py-16 lg:py-20'>
        <div className='mx-auto max-w-[1440px]'>
          <div className='grid items-center gap-10 px-5 sm:px-6 md:grid-cols-[1fr_380px] md:gap-8 md:px-8 lg:min-h-[276px] lg:grid-cols-[1fr_500px] lg:gap-10 lg:px-[58px] lg:py-0 xl:grid-cols-[1fr_540px]'>
            <div />

            <div className='max-w-full lg:max-w-[460px]'>
              <div className='flex items-start gap-3 sm:gap-4 lg:gap-[18px]'>
                <span className='shrink-0 text-[56px] font-semibold leading-[0.9] text-[#8b6518] sm:text-[68px] md:text-[78px] lg:text-[96px]'>
                  5.
                </span>

                <h2 className='pt-[4px] text-[26px] font-semibold leading-[1.05] text-[#8b6518] sm:text-[30px] md:text-[32px] lg:pt-[6px] lg:text-[36px]'>
                  Safely
                  <br />
                  Returned
                </h2>
              </div>

              <p className='mt-5 max-w-full text-[15px] font-normal leading-[1.65] text-[#6C6C6C] sm:text-[17px] md:text-[16px] lg:mt-[20px] lg:max-w-[390px] lg:text-[20px] lg:leading-[1.6]'>
                At Ahmed Studio, your original materials are safely returned
                after digitization. We carefully pack and seal every item, label
                it properly, and return it through secure delivery or in person
                collection to ensure nothing is damaged or misplaced.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Overlapping desktop image */}
      <div className='pointer-events-none absolute bottom-1/5 -left-40 z-20 hidden lg:flex'>
        <Image
          src='/images/website/order/laptop.png'
          alt='Instant access laptop'
          width={820}
          height={520}
          priority
          className='h-auto w-[690px] object-contain xl:w-[760px]'
        />
      </div>

      {/* Mobile / tablet image */}
      <div className='bg-white px-5 pb-8 sm:px-6 md:px-8 lg:hidden'>
        <div className='flex justify-center'>
          <Image
            src='/images/website/order/laptop.png'
            alt='Instant access laptop'
            width={820}
            height={520}
            priority
            className='h-auto w-full max-w-[520px] object-contain'
          />
        </div>
      </div>
    </section>
  );
};

export default InstantAccessReturnedSection;
