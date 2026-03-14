const WhyUsSection = () => {
  const cards = [
    {
      title: "Since 2017 years",
      description:
        "Over 8+ years of global expertise in preserving audiovisual heritage to the highest international standards.",
      icon: "✕",
    },
    {
      title: "Best practices",
      description:
        "Every project we supervise aligns with international standards, including high end legacy machines and professional grade equipments.",
      icon: "◎",
    },
    {
      title: "Free Consultation",
      description: [
        "First Meeting is Free: Start your journey with a complimentary 15-minute consultation to discuss your specific technical needs.",
        "Support for Individuals: We guide families with the same expert methods used for large institutions to ensure their personal memories are protected for decades.",
      ],
      button: "Read More",
      icon: "⌁",
    },
    {
      title: "RAW Capture",
      description:
        "We guarantee an uncompressed, authentic RAW capture of your original content, preserving every bit of information. Our lab uses industry-leading technology to deliver quality that home-grade equipment simply cannot match. We offer test digitization samples so you can evaluate technical compatibility and output quality before your project officially begins.",
      icon: "⊕",
    },
  ];

  return (
    <section className='w-full py-10 lg:py-14'>
      <div className='mx-auto w-full'>
        <h2 className='mb-8 text-center text-[28px] font-semibold leading-none tracking-[-0.02em] text-[#8B6848] sm:text-[32px] lg:mb-10 lg:text-[36px]'>
          Why Us
        </h2>

        <div className='grid grid-cols-1 gap-4 md:grid-cols-[1fr_1fr_1.02fr] md:grid-rows-[auto_auto] lg:gap-5'>
          {/* Card 1 */}
          <div className='rounded-[16px] bg-[#EEDFD3] px-5 py-5 lg:px-6 lg:py-6'>
            <div className='mb-5 flex h-9 w-9 items-center justify-center rounded-full border border-[#8B6848] text-sm leading-none text-[#8B6848]'>
              {cards[0].icon}
            </div>

            <h3 className='text-[20px] font-semibold leading-[1.15] text-[#8B6848]'>
              {cards[0].title}
            </h3>

            <p className='mt-2 text-[15px] leading-[1.15] text-[#2F241D]'>
              {cards[0].description}
            </p>
          </div>

          {/* Card 2 */}
          <div className='rounded-[16px] bg-[#FFEDDE] px-5 py-5 lg:px-6 lg:py-6'>
            <div className='mb-5 flex h-9 w-9 items-center justify-center rounded-full border border-[#8B6848] text-sm leading-none text-[#8B6848]'>
              {cards[1].icon}
            </div>

            <h3 className='text-[20px] font-semibold leading-[1.15] text-[#77510A]'>
              {cards[1].title}
            </h3>

            <p className='mt-2 text-[15px] leading-[1.15] text-[#000000]'>
              {cards[1].description}
            </p>
          </div>

          {/* Card 3 */}
          <div className='flex flex-col rounded-[16px] bg-[#EEDFD3] px-5 py-5 md:row-span-2 lg:px-6 lg:py-6'>
            <div className='mb-5 flex h-9 w-9 items-center justify-center rounded-full border border-[#8B6848] text-sm leading-none text-[#8B6848]'>
              {cards[2].icon}
            </div>

            <h3 className='text-[20px] font-semibold leading-[1.1] text-[#8B6848]'>
              Free <br /> Consultation
            </h3>

            <div className='mt-3 space-y-5 text-[15px] leading-[1.12] text-[#2F241D]'>
              {Array.isArray(cards[2].description) &&
                cards[2].description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
            </div>

            <button className='mt-6 h-[38px] w-fit rounded-[8px] bg-[#9B744C] px-5 text-[14px] font-medium leading-none text-white transition hover:opacity-90'>
              {cards[2].button}
            </button>
          </div>

          {/* Card 4 */}
          <div className='rounded-[16px] bg-[#EEDFD3] px-5 py-5 md:col-span-2 lg:px-6 lg:py-6'>
            <div className='mb-5 flex h-9 w-9 items-center justify-center rounded-full border border-[#8B6848] text-sm leading-none text-[#8B6848]'>
              {cards[3].icon}
            </div>

            <h3 className='text-[20px] font-semibold leading-[1.15] text-[#8B6848]'>
              {cards[3].title}
            </h3>

            <p className='mt-2 max-w-[95%] text-[15px] leading-[1.12] text-[#2F241D]'>
              {cards[3].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
