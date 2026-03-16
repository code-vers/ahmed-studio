import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const PlaceOrderSection = () => {
  return (
    <section className='w-full bg-[#f5f0ea] py-10 sm:py-14 md:py-16 lg:py-20'>
      <div className='mx-auto max-w-[1440px]'>
        <div className='grid items-center gap-10 px-5 sm:px-6 md:grid-cols-[380px_1fr] md:gap-8 md:px-8 lg:min-h-[276px] lg:grid-cols-[500px_1fr] lg:gap-10 lg:px-[58px] lg:py-0 xl:grid-cols-[540px_1fr]'>
          {/* Left */}
          <div className='max-w-full lg:max-w-[460px]'>
            <div className='flex items-start gap-3 sm:gap-4 lg:gap-[18px]'>
              <span className='shrink-0 text-[56px] font-semibold leading-[0.9] text-[#8b6518] sm:text-[68px] md:text-[78px] lg:text-[96px]'>
                1.
              </span>

              <h2 className='pt-[4px] text-[26px] font-semibold leading-[1.05] text-[#8b6518] sm:text-[30px] md:text-[32px] lg:pt-[6px] lg:text-[36px]'>
                Place an
                <br />
                Order
              </h2>
            </div>

            <p className='mt-5 max-w-full text-[15px] font-normal leading-[1.65] text-[#6C6C6C] sm:text-[17px]  md:text-[16px] lg:mt-[20px] lg:text-[20px] lg:leading-[1.6]'>
              Placing an order with Ahmed Studio is easy. Simply visit our
              store, choose the digitization or preservation service you need,
              and confirm your order. Our team will guide you through packaging,
              delivery, and processing to ensure your materials are handled
              safely and professionally from start to finish. Or send us through
              WhatsApp and our customer care will help you.
            </p>

            <div className='mt-6 flex flex-wrap items-center gap-3 lg:mt-[24px] lg:gap-[10px]'>
              <Link
                href='/store'
                className='inline-flex h-[64px] items-center justify-center rounded-[8px] bg-[#937052] px-[18px] text-[14px] font-medium text-white sm:h-[46px] sm:px-[22px] sm:text-[15px] lg:h-[42px] lg:px-[18px] lg:text-[14px]'>
                Visit Our Store
              </Link>

              <Link
                href='https://wa.me/'
                className='inline-flex h-[64px] items-center justify-center gap-[8px] rounded-[8px] bg-[#008834] px-[18px] text-[14px] font-medium text-white sm:h-[46px] sm:px-[22px] sm:text-[15px] lg:h-[42px] lg:px-[18px] lg:text-[14px]'>
                <FaWhatsapp className='text-[18px]' />
                WhatsApp
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className='flex justify-center md:justify-end'>
            <Image
              src='/images/website/order/place.png'
              alt='Place an order'
              width={690}
              height={310}
              priority
              className='h-auto w-full max-w-[320px] object-contain sm:max-w-[420px] md:max-w-[460px] lg:w-[690px] lg:max-w-none'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlaceOrderSection;
