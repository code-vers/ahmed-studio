import { BriefcaseBusiness } from "lucide-react";

const ProfessionalConsultingHero = () => {
  return (
    <section className='w-full px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-6 lg:py-8'>
      <div className='mx-auto w-full max-w-full lg:max-w-[80%]'>
        <div className='relative mx-auto h-[320px] w-full overflow-hidden rounded-[10px] sm:h-[420px] md:h-[520px] lg:h-[626px]'>
          <img
            src='/images/website/consultant/professional-consulting-hero.jpg'
            alt='Professional consulting workspace'
            className='absolute inset-0 h-full w-full object-cover'
          />

          <div className='absolute inset-0 bg-black/18' />
          <div className='absolute inset-0 bg-gradient-to-r from-black/70 via-black/34 to-black/8' />
          <div className='absolute inset-0 bg-gradient-to-t from-black/24 via-transparent to-transparent' />

          <div className='relative z-10 flex h-full flex-col justify-center px-4 pt-4 sm:px-6 sm:pt-5 md:px-8 md:pt-6 lg:px-[30px] lg:pt-[18px]'>
            <div>
              <h2 className='font-serif text-[32px] font-semibold leading-[0.96] tracking-[-0.04em] text-white sm:text-[44px] sm:leading-[0.95] md:text-[54px] md:leading-[0.94] lg:text-[62px] lg:leading-[0.93] lg:tracking-[-0.045em]'>
                <span className='block'>Professional Consulting</span>
                <span className='mt-[4px] block lg:mt-[6px]'>
                  Guaranteed Excellence
                </span>
              </h2>

              <p className='mt-3 max-w-[280px] text-[11px] font-normal leading-[1.45] tracking-[-0.01em] text-white/88 sm:mt-4 sm:max-w-[360px] sm:text-[12px] md:max-w-[410px] md:text-[13px] lg:mt-[14px] lg:max-w-[430px]'>
                A professionally consulted project ensures every bit of
                information is captured, documented, and preserved correctly
                protecting your investment and heritage for generations.
              </p>
            </div>

            <div className='mt-4 sm:mt-5 md:mt-6 lg:mt-[22px]'>
              <div className='flex min-h-[40px] w-full max-w-[290px] items-center gap-[10px] rounded-[4px] border border-[#937052] bg-[#F7F1EC] px-3 py-2 sm:max-w-[360px] sm:px-4 md:max-w-[430px] md:gap-[12px] md:px-[14px] lg:h-[42px] lg:max-w-[480px] lg:py-0'>
                <div className='flex h-[18px] w-[18px] shrink-0 items-center justify-center'>
                  <BriefcaseBusiness
                    size={14}
                    strokeWidth={1.7}
                    className='text-[#1f1c18]'
                  />
                </div>

                <p className='text-[10.5px] font-medium leading-[1.3] tracking-[-0.01em] text-[#443c34] sm:text-[11px] md:text-[11.5px] lg:leading-none'>
                  Preserved for up to{" "}
                  <span className='font-semibold'>100 years</span> through
                  continuous preservation planning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalConsultingHero;
