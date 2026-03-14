/* eslint-disable @next/next/no-img-element */

const cards = [
  {
    id: 1,
    title: (
      <>
        From your
        <br />
        attic to our app
      </>
    ),
    description:
      "Immerse yourself in the world of your memories from any screen, at any time. The AS Cloud makes it easy to stream and share thousands of moments from our app across your TV, tablet, laptop, phone and more. We provide you FREE cloud hosting for 10 days — an amazing hosting service for your home movies with many features. You can access memories anywhere, anytime.",
    button: "Find Out More",
    image: "/images/website/home/archiveShowcase1.jpg",
    reverse: false,
    imageClass:
      "w-[327px] h-[359px] md:w-[470px] md:h-[520px] rounded-[14px] object-cover block",
  },
  {
    id: 2,
    title: (
      <>
        We operate at a
        <br />
        professional archival
      </>
    ),
    description: `Grade to guarantee the highest possible quality during digitization. Our workflows are designed to capture every single bit of information from video, audio, and photographic materials—without compression, processing loss, or data reduction.

By digitizing content in true RAW / preservation formats, we ensure that the digital files remain an authentic and complete representation of the original media. This approach avoids irreversible data loss and preserves maximum detail, accuracy, and integrity.

Our main purpose is long-term preservation. All digitization is performed in accordance with internationally recognized best practices, ensuring your archive remains stable, accessible, and future-ready for decades to come.`,
    button: "Read More",
    image: "/images/website/home/archiveShowcase2.jpg",
    reverse: true,
    imageClass:
      "w-[295px] h-[246px] md:w-[470px] md:h-[520px] rounded-[12px] object-cover block",
  },
  {
    id: 3,
    title: (
      <>
        The Possibilities
        <br />
        Are Endless
      </>
    ),
    description: `When the moment calls for memories, open iMemories Cloud to effortlessly experience your family's digital library on your Apple TV, at any time.

After we digitize your movies and photos, you can stream hours of home-made content directly from your TV, laptop, tablet or smartphone. We call it foreverizing—because only iMemories lets you relive your entire family history on demand.`,
    button: "Read More",
    image: "/images/website/home/archiveShowcase3.jpg",
    reverse: false,
    imageClass:
      "w-[263px] h-[268px] md:w-[470px] md:h-[520px] rounded-[12px] object-cover block",
  },
];

const ArchiveShowcaseSection = () => {
  return (
    <section className='w-full py-[34px] md:py-[48px] lg:py-[56px]'>
      <div className='mx-auto w-full px-4 md:px-6 lg:px-8'>
        <div className='flex flex-col gap-[36px] md:gap-[48px] lg:gap-[76px]'>
          {cards.map((card) => (
            <div
              key={card.id}
              className={`flex flex-col lg:flex-row items-center lg:items-center gap-8 lg:gap-[56px] ${
                card.reverse ? "lg:[&>*:first-child]:order-2" : ""
              }`}>
              <div
                className={`shrink-0 flex justify-center lg:justify-start w-full lg:w-auto ${
                  card.reverse ? "lg:pl-[2px]" : ""
                }`}>
                <img
                  src={card.image}
                  alt='Archive showcase'
                  className={card.imageClass}
                />
              </div>

              <div
                className={`flex-1 w-full ${card.reverse ? "lg:pr-[12px]" : ""}`}>
                <h2 className='text-[#7E684E] font-semibold leading-[0.98] tracking-[-0.03em] text-[25px] md:text-[48px]'>
                  {card.title}
                </h2>

                <div className='mt-[18px] md:mt-[22px] space-y-[16px]'>
                  {card.description.split("\n\n").map((paragraph, index) => (
                    <p
                      key={index}
                      className='text-[#1f1f1f] text-[11px] leading-[1.55] md:text-[15px] lg:text-[18px] lg:leading-[1.58]'>
                      {paragraph}
                    </p>
                  ))}
                </div>

                <button
                  className='mt-[18px] md:mt-[24px] inline-flex h-[36px] min-w-[106px] items-center justify-center rounded-[8px] bg-[#937052] px-[18px] text-[11px] font-medium text-white transition hover:opacity-95 md:h-[50px] md:min-w-[140px] md:px-[28px] md:text-[16px]'
                  type='button'>
                  {card.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchiveShowcaseSection;
