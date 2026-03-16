const faqItems = [
  "1. What services do you offer?",
  "2. How do I book a session?",
  "3. Can you shoot on location?",
  "4. How long will it take to get my photos or videos?",
  "5. Can I request revisions?",
];

const FAQSection = () => {
  return (
    <section className='w-full bg-[#f8f8f8] py-8 sm:py-10 lg:py-[42px]'>
      <div className='mx-auto max-w-[85%] px-5 sm:px-8 lg:px-[38px] py-10'>
        <h2 className='text-center text-[22px] font-semibold leading-none text-[#1f1f1f] sm:text-[24px] lg:text-[40px]'>
          Frequently Asked Question
        </h2>

        <div className='mt-8 sm:mt-9 lg:mt-[38px]'>
          {faqItems.map((item, index) => (
            <div key={index} className='border-b border-[#d6d6d6]'>
              <p className='pb-[10px] pt-[14px] text-[13px] font-semibold leading-[1.35] text-[#8b6a45] sm:text-[14px] lg:text-[24px]'>
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
