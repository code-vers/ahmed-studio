const SplitPaymentBanner = () => {
  return (
    <section className='w-full bg-[#23140C]'>
      <div className='mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-6 px-4 py-8 sm:px-6 md:px-8 lg:h-[214px] lg:flex-row lg:items-center lg:justify-between lg:px-[48px] lg:py-0'>
        <div className='flex flex-col items-center text-center lg:pl-[70px]'>
          <h2 className='text-[32px] font-normal leading-[1.05] tracking-[-0.02em] text-[#F5DAB9] sm:text-[40px] md:text-[52px] lg:text-[64px]'>
            Split To 4 Payments
          </h2>

          <p className='mt-3 text-[14px] font-normal leading-[1.4] text-[#F5DAB9] sm:mt-4 sm:text-[16px] md:text-[18px] lg:mt-[16px] lg:text-[20px] lg:leading-none'>
            No Fees Or Interest{" "}
            <span className='hidden sm:inline'>&nbsp;•&nbsp;</span>
            <span className='block sm:inline'>All Bank Cards Accepted</span>
          </p>
        </div>

        <div className='flex flex-col items-center lg:mr-[28px]'>
          <span className='mb-3 text-[18px] font-normal leading-none text-[#F5DAB9] sm:mb-4 sm:text-[20px] md:text-[22px] lg:mb-[16px] lg:text-[24px]'>
            Available Via:
          </span>

          <div className='flex items-center gap-2 sm:gap-[10px]'>
            <div className='flex h-[26px] min-w-[62px] items-center justify-center rounded-[12px] bg-[#E3C29A] px-3 sm:h-[27px] sm:min-w-[66px] sm:px-[14px]'>
              <span className='text-[13px] font-semibold lowercase leading-none tracking-[-0.01em] text-[#42220D] sm:text-[14px]'>
                tabby
              </span>
            </div>

            <div className='flex h-[26px] min-w-[62px] items-center justify-center rounded-[12px] bg-[#B97459] px-3 sm:h-[27px] sm:min-w-[64px] sm:px-[12px]'>
              <span className='text-[13px] font-medium lowercase leading-none tracking-[-0.01em] text-[#F1D7B3] sm:text-[14px]'>
                tamara
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitPaymentBanner;
