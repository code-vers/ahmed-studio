import Image from "next/image";

const filmItems = [
  {
    id: 1,
    title: "8mm",
    image: "/images/website/about/film-1.png",
    alt: "8mm film reel",
  },
  {
    id: 2,
    title: "16mm",
    image: "/images/website/about/film-2.png",
    alt: "16mm film reel",
  },
  {
    id: 3,
    title: "Super 8",
    image: "/images/website/about/film-3.png",
    alt: "Super 8 film reel",
  },
];

const MovieFilmsSection = () => {
  return (
    <section className='w-full pb-10 bg-white'>
      <div className='relative overflow-hidden'>
        {/* top pink area */}
        <div className='absolute inset-x-0 top-0 h-[309px] bg-[#FFEDED]' />

        <div className='relative z-10 mx-auto max-w-[1056px] px-4 pt-[24px] pb-[55px] sm:px-6 lg:px-0'>
          {/* heading content */}
          <div className='mx-auto text-center'>
            <h2 className='text-[28px] font-semibold leading-[1.2] text-[#1f1f1f] sm:text-[38px] lg:text-[42px]'>
              Movie Films
            </h2>

            <p className='mx-auto mt-[18px] max-w-[780px] text-[18px] font-normal leading-[1.45] text-[#6f6f6f] sm:text-[22px] lg:text-[22px]'>
              Old reels, new memories. Convert your 8mm, Super 8, and 16mm films
              into high-quality digital videos perfect for reliving every
              moment.
            </p>
          </div>

          {/* cards */}
          <div className='mt-[36px] flex flex-wrap items-start justify-center gap-x-[63px] gap-y-6'>
            {filmItems.map((item) => (
              <div
                key={item.id}
                className='flex h-[194px] w-[149px] flex-col items-center rounded-[14px] border border-[#9a9a9a] bg-[#f8f8f8] pt-[12px] shadow-[0_0_0_1px_rgba(0,0,0,0.02)]'>
                <div className='relative flex h-[113px] w-[113px] items-center justify-center'>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className='object-contain'
                  />
                </div>

                <h3 className='mt-[28px] text-center text-[18px] font-semibold leading-none text-[#111111]'>
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieFilmsSection;
