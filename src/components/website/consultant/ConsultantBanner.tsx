import Image from "next/image";

export default function ConsultantBanner() {
  return (
    <section className='w-[85%] mx-auto my-10'>
      <div className='relative h-180  overflow-hidden rounded-[10px]'>
        <Image
          src='/images/website/consultant/banner.jpg'
          alt='Consultant banner'
          fill
          priority
          className='object-cover'
        />

        {/* dark left overlay */}
        <div className='absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.72)_0%,rgba(0,0,0,0.55)_22%,rgba(0,0,0,0.18)_48%,rgba(0,0,0,0)_72%)]' />

        {/* content */}
        <div className='relative z-10 flex h-full items-center px-6 md:px-7'>
          <div className=''>
            <h1 className='text-[28px] font-semibold leading-[1.08] text-white sm:text-[36px] md:text-[64px]'>
              Protect Your Archive,
              <br />
              Secure Your Legacy.
            </h1>

            <p className='mt-5 max-w-[590px] text-[10px] leading-[1.35] text-white/95 sm:text-[12px] md:mt-[20px] md:text-[16px]'>
              From individual memories to national heritage—we ensure your
              digitization project is done right the first time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
