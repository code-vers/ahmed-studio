const ServicesAndPricing = () => {
  return (
    <section className='bg-white pb-16 px-6 sm:px-10 lg:px-24 text-center'>
      {/* Heading */}
      <h2 className='text-[24px] sm:text-[28px] lg:text-[32px] font-semibold text-black mb-6'>
        For More Services And Prices
      </h2>

      {/* Paragraph */}
      <p className='text-[#333333] text-[14px] sm:text-[16px] lg:text-[18px] leading-relaxed max-w-7xl mx-auto mb-8'>
        We offer a wide range of professional digitization and media services
        tailored to preserve your memories with the highest quality. Our
        services include video tape conversion, photo and film digitization,
        audio restoration, image enhancement, and customized media solutions.
        <br />
        <br />
        Pricing varies depending on the type of service, media format, duration,
        and level of restoration required. Whether you need basic digitization
        or advanced enhancement, we provide flexible options to match your needs
        and budget.
      </p>

      {/* Button */}
      <button className='bg-[#937052] text-white text-[14px] sm:text-[16px] lg:text-[16px] font-medium px-6 py-3 rounded-md hover:opacity-90 transition'>
        Visit Our Store
      </button>
    </section>
  );
};

export default ServicesAndPricing;
