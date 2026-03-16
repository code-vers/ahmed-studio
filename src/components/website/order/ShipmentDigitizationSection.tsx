import Image from "next/image";

const ShipmentDigitizationSection = () => {
  return (
    <section className='relative w-full overflow-hidden'>
      {/* 2nd */}
      <div className='w-full bg-white py-10 sm:py-14 md:py-16 lg:py-20'>
        <div className='mx-auto max-w-[1440px]'>
          <div className='grid items-center gap-10 px-5 sm:px-6 md:grid-cols-[380px_1fr] md:gap-8 md:px-8 lg:min-h-[276px] lg:grid-cols-[500px_1fr] lg:gap-10 lg:px-[58px] lg:py-0 xl:grid-cols-[540px_1fr]'>
            <div className='max-w-full lg:max-w-[460px]'>
              <div className='flex items-start gap-3 sm:gap-4 lg:gap-[18px]'>
                <span className='shrink-0 text-[56px] font-semibold leading-[0.9] text-[#8b6518] sm:text-[68px] md:text-[78px] lg:text-[96px]'>
                  2.
                </span>

                <h2 className='pt-[4px] text-[26px] font-semibold leading-[1.05] text-[#8b6518] sm:text-[30px] md:text-[32px] lg:pt-[6px] lg:text-[36px]'>
                  Shipment
                  <br />
                  Pick
                </h2>
              </div>

              <p className='mt-5 max-w-full text-[15px] font-normal leading-[1.65] text-[#6C6C6C] sm:text-[17px] md:text-[16px] lg:mt-[20px] lg:max-w-[390px] lg:text-[20px] lg:leading-[1.6]'>
                Pick up your shipment from Ahmed Studio by visiting our studio
                during working hours. Bring your order confirmation and a valid
                ID, and our team will hand over your package safely.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3rd */}
      <div className='w-full bg-[#f5f0ea] py-10 sm:py-14 md:py-16 lg:py-20'>
        <div className='mx-auto max-w-[1440px]'>
          <div className='grid items-center gap-10 px-5 sm:px-6 md:grid-cols-[380px_1fr] md:gap-8 md:px-8 lg:min-h-[276px] lg:grid-cols-[500px_1fr] lg:gap-10 lg:px-[58px] lg:py-0 xl:grid-cols-[540px_1fr]'>
            <div className='max-w-full lg:max-w-[460px]'>
              <div className='flex items-start gap-3 sm:gap-4 lg:gap-[18px]'>
                <span className='shrink-0 text-[56px] font-semibold leading-[0.9] text-[#8b6518] sm:text-[68px] md:text-[78px] lg:text-[96px]'>
                  3.
                </span>

                <h2 className='pt-[4px] text-[26px] font-semibold leading-[1.05] text-[#8b6518] sm:text-[30px] md:text-[32px] lg:pt-[6px] lg:text-[36px]'>
                  Digitization
                  <br />
                  Your Memory
                </h2>
              </div>

              <p className='mt-5 max-w-full text-[15px] font-normal leading-[1.65] text-[#6C6C6C] sm:text-[17px] md:text-[16px] lg:mt-[20px] lg:max-w-[390px] lg:text-[20px] lg:leading-[1.6]'>
                Placing an order with Ahmed Studio is easy. Simply visit our
                store, choose the digitization or preservation service you need,
                and confirm your order. Our team will guide you through
                packaging, delivery, and processing to ensure your materials are
                handled safely and professionally from start to finish. Or send
                us through WhatsApp and our customer care will help you.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop overlapping image */}
      <div className='pointer-events-none absolute right-0 top-[120px] z-20 hidden lg:flex justify-center md:justify-end'>
        <Image
          src='/images/website/order/hand.png'
          alt='Shipment and digitization'
          width={690}
          height={310}
          priority
          className='h-auto w-[690px] object-contain xl:w-[760px]'
        />
      </div>

      {/* Mobile / tablet image */}
      <div className='bg-[#f5f0ea] px-5 pb-8 sm:px-6 md:px-8 lg:hidden'>
        <div className='flex justify-center'>
          <Image
            src='/images/website/order/hand.png'
            alt='Shipment and digitization'
            width={690}
            height={310}
            priority
            className='h-auto w-full max-w-[520px] object-contain'
          />
        </div>
      </div>
    </section>
  );
};

export default ShipmentDigitizationSection;
