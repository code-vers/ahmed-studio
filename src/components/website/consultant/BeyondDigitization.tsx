import { Archive, BadgeCheck, Clock3, FileText, Tags } from "lucide-react";

const cards = [
  {
    icon: FileText,
    text: (
      <>
        Your content is preserved in
        <br />
        authentic, preservation-
        <br />
        grade master files
      </>
    ),
    className: "md:col-span-2",
  },
  {
    icon: Clock3,
    text: (
      <>
        Long-term preservation is ensured
        <br />
        through correct formats and
        <br />
        storage strategies
      </>
    ),
    className: "md:col-span-2",
  },
  {
    icon: Archive,
    text: (
      <>
        Your archive remains accessible
        <br />
        and usable for future
        <br />
        generations
      </>
    ),
    className: "md:col-span-2",
  },
  {
    icon: Tags,
    text: (
      <>
        Metadata is properly applied, guaranteeing
        <br />
        discoverability, context, and rights
        <br />
        management
      </>
    ),
    className: "md:col-span-3",
  },
  {
    icon: BadgeCheck,
    text: (
      <>
        The risk of quality loss or re-digitization is
        <br />
        eliminated
      </>
    ),
    className: "md:col-span-3",
  },
];

const BeyondDigitization = () => {
  return (
    <section className='w-full bg-white px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-6 lg:py-8'>
      <div className='mx-auto w-full max-w-full lg:max-w-[80%]'>
        <div className='pb-8 text-center sm:pb-10 md:pb-12 lg:pb-[46px]'>
          <h1 className='text-[28px] font-semibold leading-none tracking-[-0.03em] text-[#8a6113] sm:text-[32px] md:text-[35px] lg:text-[38px]'>
            Beyond Digitization
          </h1>
        </div>

        <div className='relative h-[280px] overflow-hidden rounded-[12px] bg-[#2b231d] shadow-sm sm:h-[400px] md:h-[520px] lg:h-[630px]'>
          <img
            src='/images/website/consultant/beyond-consult.jpg'
            alt='Archival consulting'
            className='absolute inset-0 h-full w-full object-cover'
          />

          <div className='absolute inset-0 bg-black/20' />
          <div className='absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-transparent' />
          <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent' />

          <div className='absolute inset-0 flex items-center'>
            <div className='px-4 text-white sm:px-6 md:px-8 lg:pl-[60px] lg:pr-0'>
              <h2 className='font-serif text-[30px] font-semibold leading-[1.06] tracking-[-0.03em] sm:text-[40px] md:text-[48px] lg:text-[58px] lg:leading-[1.08]'>
                <div>The Value of Professional</div>
                <div>Archival Consulting</div>
              </h2>

              <p className='mt-3 max-w-[300px] text-[13px] leading-[1.5] text-white/90 sm:mt-4 sm:max-w-[380px] sm:text-[15px] md:max-w-[460px] md:text-[16px] lg:mt-[18px] lg:max-w-[520px] lg:text-[18px] lg:leading-[1.6]'>
                Professional oversight ensures that every piece of data is
                captured, documented, and preserved correctly.
              </p>
            </div>
          </div>
        </div>

        <div className='mx-auto my-10 sm:my-12 md:my-14 lg:my-[54px]'>
          <div className='grid grid-cols-1 gap-x-8 gap-y-5 md:grid-cols-2 md:gap-x-[30px] md:gap-y-[18px] lg:gap-x-[42px]'>
            <div className='flex items-start gap-[10px] pr-0 sm:gap-[12px] md:pr-[12px]'>
              <div className='mt-[3px] h-[110px] w-[3px] shrink-0 bg-[#d65a2f] sm:h-[125px] md:h-[140px] lg:h-[160px]' />
              <p className='max-w-full text-[14px] font-normal leading-[1.68] tracking-[-0.01em] text-[#2e2a26] sm:max-w-[520px] sm:text-[15px] md:text-[15px] lg:max-w-[520px] lg:text-[16px] lg:leading-[1.72]'>
                A Professionally Consulted Project Guarantees That Every Bit Of
                Information Is Captured, Documented, And Preserved Correctly-
                Protecting Your Investment And Your Heritage. Be Smart. Invest
                In Your Project Once. Do It Right From The Beginning, And Ensure
                Your Archive Remains Accessible, Meaningful, And Preserved For
                Generations To Come.
              </p>
            </div>

            <div className='pl-0 md:pl-[4px] lg:pl-[6px]'>
              <p className='max-w-full text-[14px] font-normal leading-[1.68] tracking-[-0.01em] text-[#99a3b5] sm:max-w-[520px] sm:text-[15px] md:text-[15px] lg:max-w-[520px] lg:text-[16px] lg:leading-[1.72]'>
                “A Future-Proof Archive Digitization Is Not Simply About A VTR
                And An Analog-To-Digital Converter. It Is A Complete Ecosystem
                Of Hardware, Software, Workflows, Standards, And Preservation
                Strategies.”
              </p>
            </div>
          </div>

          <div className='mt-7 grid grid-cols-1 gap-[14px] sm:mt-8 sm:gap-[16px] md:mt-[30px] md:grid-cols-6 md:gap-x-[16px] md:gap-y-[16px] lg:mt-[34px] lg:gap-x-[18px] lg:gap-y-[18px]'>
            {cards.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className={`rounded-[16px] bg-[#e9e4de] ${item.className} ${
                    index < 3
                      ? "min-h-[150px] sm:min-h-[158px] md:min-h-[160px] lg:min-h-[166px]"
                      : "min-h-[145px] sm:min-h-[150px] md:min-h-[152px] lg:min-h-[158px]"
                  }`}>
                  <div className='flex h-full flex-col items-center justify-center px-5 py-5 text-center sm:px-6 sm:py-6 md:px-[20px] md:py-[20px] lg:px-[24px] lg:py-[22px]'>
                    <div className='mb-4 flex h-[34px] w-[34px] items-center justify-center rounded-[2px] bg-[#f3ede4] sm:mb-[16px] sm:h-[35px] sm:w-[35px] md:h-[36px] md:w-[36px] lg:mb-[18px]'>
                      <Icon
                        size={18}
                        strokeWidth={1.45}
                        className='text-[#3b342f]'
                      />
                    </div>

                    <p className='text-[13px] font-normal leading-[1.42] tracking-[-0.01em] text-[#2c2926] sm:text-[13.5px] md:text-[13px] lg:text-[14px] lg:leading-[1.45]'>
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeyondDigitization;
