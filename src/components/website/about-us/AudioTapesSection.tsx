import Image from "next/image";

const audioTapeItems = [
  {
    id: 1,
    title: "8mm",
    image: "/images/website/about/audio-1.png",
    alt: "Vinyl record",
  },
  {
    id: 2,
    title: "16mm",
    image: "/images/website/about/audio-2.png",
    alt: "White reel tape",
  },
  {
    id: 3,
    title: "Super 8",
    image: "/images/website/about/audio-3.png",
    alt: "Brown reel tape",
  },
  {
    id: 4,
    title: "8mm",
    image: "/images/website/about/audio-4.png",
    alt: "Cassette tape",
  },
  {
    id: 5,
    title: "16mm",
    image: "/images/website/about/audio-5.png",
    alt: "Black cassette tape",
  },
  {
    id: 6,
    title: "Super 8",
    image: "/images/website/about/audio-6.png",
    alt: "Transparent cassette tape",
  },
];

const AudioTapesSection = () => {
  return (
    <section className='w-full bg-white pb-8 sm:pb-10 lg:pb-10'>
      <div className='relative overflow-hidden'>
        {/* green bg */}
        <div className='absolute inset-x-0 top-0 bg-[#F2FFF2] h-[490px]' />

        <div className='relative z-10 mx-auto max-w-[1056px] px-4 pt-8 pb-8 sm:px-6 sm:pt-10 sm:pb-10 md:px-8 md:pt-12 lg:px-0 lg:pt-[19px] lg:pb-[36px]'>
          <div className='mx-auto text-center'>
            <h2 className='text-[28px] font-semibold leading-[1.2] text-[#202020] sm:text-[34px] md:text-[38px] lg:text-[42px]'>
              Audio Tapes
            </h2>

            <p className='mx-auto mt-3 max-w-[340px] text-[14px] font-normal leading-[1.6] text-[#727272] sm:mt-4 sm:max-w-[560px] sm:text-[16px] md:max-w-[680px] md:text-[17px] lg:mt-[12px] lg:max-w-[760px] lg:text-[18px] lg:leading-[1.5]'>
              Don’t let your precious audio memories fade away. We convert your
              old cassette and reel-to-reel tapes into high-quality digital
              files, preserving every note, word, and sound for years to come.
            </p>
          </div>

          <div className='mx-auto mt-8 grid max-w-[330px] grid-cols-2 justify-items-center gap-x-4 gap-y-4 sm:mt-10 sm:max-w-[520px] sm:grid-cols-3 sm:gap-x-6 sm:gap-y-6 md:max-w-[620px] md:gap-x-8 md:gap-y-6 lg:mt-[36px] lg:max-w-[600px] lg:grid-cols-3 lg:gap-x-[48px] lg:gap-y-[18px]'>
            {audioTapeItems.map((item) => (
              <div
                key={item.id}
                className='flex h-[150px] w-[120px] flex-col items-center rounded-[12px] border border-[#9a9a9a] bg-[#f8f8f8] pt-3 shadow-[0_0_0_1px_rgba(0,0,0,0.02)] sm:h-[170px] sm:w-[132px] sm:pt-4 md:h-[182px] md:w-[140px] lg:h-[194px] lg:w-[149px] lg:rounded-[14px] lg:pt-[16px]'>
                <div className='flex h-[78px] w-[78px] items-center justify-center sm:h-[88px] sm:w-[88px] md:h-[96px] md:w-[96px] lg:h-[113px] lg:w-[113px]'>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={88}
                    height={88}
                    className='h-[62px] w-[62px] object-contain sm:h-[70px] sm:w-[70px] md:h-[78px] md:w-[78px] lg:h-[88px] lg:w-[88px]'
                  />
                </div>

                <h3 className='mt-4 text-center text-[15px] font-semibold leading-none text-[#111111] sm:mt-5 sm:text-[16px] md:mt-6 md:text-[17px] lg:mt-[28px] lg:text-[18px]'>
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

export default AudioTapesSection;
