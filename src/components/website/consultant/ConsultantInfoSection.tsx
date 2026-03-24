import Image from "next/image";

const ConsultantInfoSection = () => {
  return (
    <section className='w-full bg-white py-10 md:py-14 lg:py-[46px]'>
      <div className='mx-auto max-w-[80%]'>
        {/* Top Intro */}
        <div className='mx-auto mb-12 text-center sm:mb-16 lg:mb-20'>
          <h2 className='text-[28px] font-semibold leading-[1.1] text-[#77510A] sm:text-[34px] md:text-[40px] lg:text-[48px]'>
            At Ahmed Studio
          </h2>

          <p className='mx-auto mt-[10px] text-[13px] font-normal leading-[1.6] text-[#3C3C3C] sm:text-[14px] md:text-[16px] lg:text-[18px] lg:leading-[1.35]'>
            Our consulting services are built on over 20 years of combined
            experience through Ahmed Studio and our trusted international
            partners. We help individuals, companies, and government entities
            plan, execute, and supervise digitization and preservation projects
            to the highest international standards. Digitization is not just a
            technical process—it is a strategic decision that affects the future
            accessibility, authenticity, and safety of your archive. Our role as
            consultants is to protect your project, your investment, and your
            archive.
          </p>
        </div>

        <div className='mx-auto max-w-[80%]'>
          {/* Middle block */}
          <div className='mt-8 flex flex-col gap-8 md:mt-10 md:flex-col lg:mt-[42px] lg:flex-row lg:items-center lg:justify-between lg:gap-[64px]'>
            <div className='max-w-full lg:max-w-[580px]'>
              <h3 className='text-[28px] font-semibold leading-[1.08] text-[#8b6518] sm:text-[34px] md:text-[40px] lg:text-[48px]'>
                What Does
                <br />a Consultant Do?
              </h3>

              <p className='mt-[12px] text-[14px] font-normal leading-[1.65] text-[#6f6f6f] sm:text-[15px] md:text-[16px] lg:text-[18px] lg:leading-[1.45]'>
                A digitization consultant acts as your technical representative
                and quality guardian. We translate your goals into clear
                technical requirements, design reliable workflows, and ensure
                that every stage of the project is accurate and consistent—from
                inspection to the final archived file. We make sure:
              </p>

              <div className='mt-[12px] space-y-[6px] text-[14px] font-normal leading-[1.65] text-[#6f6f6f] sm:text-[15px] md:text-[16px] lg:text-[18px] lg:leading-[1.45]'>
                <p>
                  <span className='font-semibold text-[#3d3d3d]'>
                    Technology:
                  </span>{" "}
                  The right technologies are selected
                </p>
                <p>
                  <span className='font-semibold text-[#3d3d3d]'>
                    Workflow:
                  </span>{" "}
                  The correct workflows are applied.
                </p>
                <p>
                  <span className='font-semibold text-[#3d3d3d]'>Outputs:</span>{" "}
                  The final outputs meet international best practices
                </p>
                <p>
                  <span className='font-semibold text-[#3d3d3d]'>
                    Preservation:
                  </span>{" "}
                  Long-term preservation is achieved, not just short-term
                  delivery
                </p>
              </div>
            </div>

            <div className='flex justify-center lg:justify-end'>
              <div className='relative h-[240px] w-full max-w-[320px] overflow-hidden rounded-[8px] sm:h-[300px] sm:max-w-[380px] md:h-[380px] md:max-w-[460px] lg:h-[520px] lg:w-[470px] lg:max-w-none'>
                <Image
                  src='/images/website/consultant/what-consult.jpg'
                  alt='Consultant working setup'
                  fill
                  className='object-cover'
                />
              </div>
            </div>
          </div>

          {/* Bottom block */}
          <div className='mt-10 flex flex-col gap-8 md:mt-12 md:flex-col lg:mt-[42px] lg:flex-row lg:items-center lg:justify-between lg:gap-[64px]'>
            <div className='flex justify-center lg:justify-end'>
              <div className='relative h-[240px] w-full max-w-[320px] overflow-hidden rounded-[8px] sm:h-[300px] sm:max-w-[380px] md:h-[380px] md:max-w-[460px] lg:h-[520px] lg:w-[470px] lg:max-w-none'>
                <Image
                  src='/images/website/consultant/why-consult.jpg'
                  alt='Consultant working setup'
                  fill
                  className='object-cover'
                />
              </div>
            </div>

            <div className='max-w-full lg:max-w-[85%]'>
              <h3 className='text-[28px] font-semibold leading-[1.08] text-[#8b6518] sm:text-[34px] md:text-[40px] lg:text-[48px]'>
                Why Consulting
                <br />
                Is Essential
              </h3>

              <p className='mt-[12px] text-[14px] font-normal leading-[1.65] text-[#6f6f6f] sm:text-[15px] md:text-[16px] lg:text-[18px] lg:leading-[1.45]'>
                Without proper consulting, many projects suffer from:
              </p>

              <div className='mt-[12px] space-y-[6px] text-[14px] font-normal leading-[1.65] text-[#6f6f6f] sm:text-[15px] md:text-[16px] lg:text-[18px] lg:leading-[1.45]'>
                <p>
                  <span className='font-semibold text-[#3d3d3d]'>
                    Proper Correction:
                  </span>{" "}
                  Incorrect digitization methods.
                </p>
                <p>
                  <span className='font-semibold text-[#3d3d3d]'>Quality:</span>{" "}
                  Low-quality or compressed outputs.
                </p>
                <p>
                  <span className='font-semibold text-[#3d3d3d]'>Storage:</span>{" "}
                  Poor storage and metadata design.
                </p>
                <p>
                  <span className='font-semibold text-[#3d3d3d]'>Cost:</span>{" "}
                  Costly rework or data loss.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultantInfoSection;
