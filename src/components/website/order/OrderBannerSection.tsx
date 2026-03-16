import Image from "next/image";

const OrderBannerSection = () => {
  return (
    <section className='w-full bg-[#efefef]'>
      <div className='mx-auto flex min-h-[540px] max-w-[1440px] items-center justify-center px-6 sm:px-10 md:px-14 lg:min-h-[560px] lg:px-[80px] xl:px-[120px]'>
        <div className='grid w-full max-w-[1200px] items-center gap-10 md:grid-cols-[420px_1fr] lg:grid-cols-[460px_1fr] lg:gap-[70px] xl:grid-cols-[500px_1fr]'>
          <div className='flex justify-center md:justify-end'>
            <Image
              src='/images/website/order/laptop.png'
              alt='How it works'
              width={420}
              height={230}
              priority
              className='h-auto w-[260px] object-contain sm:w-[320px] md:w-[360px] lg:w-[400px] xl:w-[430px]'
            />
          </div>

          <div className='max-w-[500px] text-center md:text-left'>
            <h2 className='text-[32px] font-semibold uppercase leading-none text-[#665740] sm:text-[40px] lg:text-[48px]'>
              HOW IT WORKS
            </h2>

            <p className='mt-[20px] text-[16px] font-normal leading-[1.55] text-[#4f4f4f] sm:text-[17px] lg:max-w-[470px] lg:text-[18px]'>
              We make preserving your memories simple. First, you share your
              tapes, films or audio reels with our team. We carefully clean,
              restore and digitize each item using specialized equipment. Once
              completed, we deliver your files digitally or on USB giving you
              secure access to your memories anytime without the risk of
              deterioration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderBannerSection;
