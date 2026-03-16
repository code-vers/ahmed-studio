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
    <section className='w-full bg-white pb-10'>
      <div className='relative overflow-hidden'>
        {/* green bg more down */}
        <div className='absolute inset-x-0 top-0 h-[490px] bg-[#F2FFF2]' />

        <div className='relative z-10 mx-auto max-w-[1056px] px-4 pt-[19px] pb-[36px] sm:px-6 lg:px-0'>
          <div className='mx-auto text-center'>
            <h2 className='text-[28px] font-semibold leading-[1.2] text-[#202020] sm:text-[36px] lg:text-[42px]'>
              Audio Tapes
            </h2>

            <p className='mx-auto mt-[12px] max-w-[760px] text-[16px] font-normal leading-[1.5] text-[#727272] sm:text-[18px] lg:text-[18px]'>
              Don’t let your precious audio memories fade away. We convert your
              old cassette and reel-to-reel tapes into high-quality digital
              files, preserving every note, word, and sound for years to come.
            </p>
          </div>

          <div className='mx-auto mt-[36px] grid max-w-[600px] grid-cols-3 justify-items-center gap-x-[48px] gap-y-[18px]'>
            {audioTapeItems.map((item) => (
              <div
                key={item.id}
                className='flex h-[194px] w-[149px] flex-col items-center rounded-[14px] border border-[#9a9a9a] bg-[#f8f8f8] pt-[16px] shadow-[0_0_0_1px_rgba(0,0,0,0.02)]'>
                <div className='flex h-[113px] w-[113px] items-center justify-center'>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={88}
                    height={88}
                    className='h-[88px] w-[88px] object-contain'
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

export default AudioTapesSection;
