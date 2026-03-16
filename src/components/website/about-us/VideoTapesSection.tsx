import Image from "next/image";

const videoTapeItems = [
  {
    id: 1,
    title: "Super 8",
    image: "/images/website/about/video-1.png",
    alt: "Super 8 video tape card",
  },
  {
    id: 2,
    title: "8mm",
    image: "/images/website/about/video-2.png",
    alt: "8mm video tape card",
  },
  {
    id: 3,
    title: "16mm",
    image: "/images/website/about/video-3.png",
    alt: "16mm video tape card",
  },
  {
    id: 4,
    title: "Super 8",
    image: "/images/website/about/video-4.png",
    alt: "Super 8 video tape card",
  },
  {
    id: 5,
    title: "16mm",
    image: "/images/website/about/video-5.png",
    alt: "16mm video tape card",
  },
  {
    id: 6,
    title: "8mm",
    image: "/images/website/about/video-6.png",
    alt: "8mm video tape card",
  },
  {
    id: 7,
    title: "16mm",
    image: "/images/website/about/video-7.png",
    alt: "16mm video tape card",
  },
  {
    id: 8,
    title: "Super 8",
    image: "/images/website/about/video-8.png",
    alt: "Super 8 video tape card",
  },
  {
    id: 9,
    title: "8mm",
    image: "/images/website/about/video-9.png",
    alt: "8mm video tape card",
  },
  {
    id: 10,
    title: "8mm",
    image: "/images/website/about/video-10.png",
    alt: "8mm video tape card",
  },
  {
    id: 11,
    title: "16mm",
    image: "/images/website/about/video-11.png",
    alt: "16mm video tape card",
  },
  {
    id: 12,
    title: "Super 8",
    image: "/images/website/about/video-12.png",
    alt: "Super 8 video tape card",
  },
];

const VideoTapesSection = () => {
  return (
    <section className='w-full bg-[#FFF6EE]'>
      <div className='relative overflow-hidden'>
        <div className='absolute inset-x-0 bottom-0 h-[62px] bg-white' />

        <div className='relative z-10 mx-auto max-w-[1260px] px-4 pt-[20px] pb-[28px] sm:px-6 lg:px-0'>
          <div className='mx-auto text-center'>
            <h2 className='text-[28px] font-semibold leading-[1.2] text-[#202020] sm:text-[36px] lg:text-[42px]'>
              Video Tapes
            </h2>

            <p className='mx-auto mt-[12px] max-w-[760px] text-[14px] font-normal leading-[1.55] text-[#727272] sm:text-[16px] lg:text-[16px]'>
              our old VHS, MiniDV, Hi8, and camcorder tapes won’t last forever
              but your memories can. We carefully digitize your video tapes into
              high-quality digital files, preserving every moment with clarity,
              safety and care.
            </p>
          </div>

          <div className='mx-auto mt-[28px] grid max-w-[820px] grid-cols-2 justify-items-center gap-x-[20px] gap-y-[20px] sm:grid-cols-3 md:grid-cols-4 lg:gap-x-[28px] lg:gap-y-[34px]'>
            {videoTapeItems.map((item) => (
              <div key={item.id} className='relative h-[194px] w-[149px]'>
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className='object-contain'
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTapesSection;
