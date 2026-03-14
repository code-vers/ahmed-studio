const StatisticsSection = () => {
  const stats = [
    { value: "8+", label: "Years in the Field" },
    { value: "100%", label: "RAW Accuracy" },
    { value: "2,570,000", label: "Minutes Captured" },
    { value: "22", label: "Cities Within Our Network" },
    { value: "1,850,000+", label: "Number of Visitors" },
    { value: "98%", label: "Client Satisfied" },
  ];

  return (
    <section className='w-full py-10 sm:py-12 lg:py-[28px]'>
      <div className='mx-auto w-full px-4 sm:px-6 lg:px-0'>
        <h2 className='mb-10 text-center text-[28px] font-semibold leading-none tracking-[-0.02em] text-black sm:mb-14 sm:text-[36px] md:text-[42px] lg:mb-20 lg:text-[48px]'>
          Statistics
        </h2>

        {/* Mobile / Tablet */}
        <div className='grid grid-cols-2 border-t-2 border-l-2 border-[#D9D9D9] lg:hidden'>
          {stats.map((item, index) => (
            <div
              key={item.label}
              className={`flex min-h-[120px] flex-col items-center justify-center border-r-2 border-b-2 border-[#D9D9D9] px-3 py-5 sm:min-h-[140px] sm:px-4`}>
              <h3 className='text-center text-[18px] sm:text-[25px] font-semibold leading-none tracking-[-0.01em] text-[#846449] md:text-[40px]'>
                {item.value}
              </h3>
              <p className='mt-3 text-center text-[11px] font-normal leading-[1.35] text-black sm:text-[12px] md:text-[13px]'>
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Large Device - exact same */}
        <div className='hidden lg:block'>
          <div className='mt-[36px] grid grid-cols-3'>
            {stats.slice(0, 3).map((item, index) => (
              <div
                key={item.label}
                className={`flex min-h-[95px] flex-col items-center justify-start ${
                  index !== 2 ? "border-r-2 border-[#D9D9D9]" : ""
                }`}>
                <h3 className='text-[48px] font-semibold leading-none tracking-[-0.01em] text-[#846449]'>
                  {item.value}
                </h3>
                <p className='mt-[10px] text-center text-[12px] font-normal leading-none text-black'>
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className='grid grid-cols-3 border-t-2 border-[#D9D9D9]'>
            {stats.slice(3, 6).map((item, index) => (
              <div
                key={item.label}
                className={`flex min-h-[95px] flex-col items-center justify-start pt-[18px] ${
                  index !== 2 ? "border-r-2 border-[#D9D9D9]" : ""
                }`}>
                <h3 className='text-[48px] font-semibold leading-none tracking-[-0.01em] text-[#846449]'>
                  {item.value}
                </h3>
                <p className='mt-[10px] text-center text-[12px] font-normal leading-none text-black'>
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
