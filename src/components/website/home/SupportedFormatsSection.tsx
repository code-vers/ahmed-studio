const formatColumns = [
  {
    title: "Audio",
    items: [
      '1/4" Open Reel',
      "Compact Cassette",
      "DAT / ADAT",
      "Vinyl / Shellac",
      "Wire Recordings",
    ],
  },
  {
    title: "Video",
    items: [
      "VHS / S-VHS",
      "Betcam SP/Digi",
      'U-Matic (3/4")',
      "Hi8 / Video8",
      "MiniDV / DVCAM",
    ],
  },
  {
    title: "Film",
    items: ["32mm", "16mm / Super 16", "8mm / Super 8", "9.5mm", "Pathe Baby"],
  },
];

export default function SupportedFormatsSection() {
  return (
    <section className='w-full'>
      <div className='flex flex-col justify-between pt-[38px] pb-[56px] md:flex-row md:items-start md:gap-[72px] lg:gap-[92px] xl:gap-[108px]'>
        {/* Left content */}
        <div className='w-full max-w-[370px] shrink-0'>
          <h2 className='text-[28px] font-semibold leading-[1.02] tracking-[-0.04em] text-[#22304A]'>
            Supported Formats
          </h2>

          <p className='mt-[18px] text-[16px] md:text-[20px] font-normal leading-[0.98] tracking-[-0.03em] text-[#555555]'>
            We support a wide range of legacy formats. If you don’t see your
            format listed, please contact us for a custom assessment.
          </p>

          <button
            type='button'
            className='mt-[18px] flex h-[48px] w-[250px] items-center justify-center rounded-[8px] bg-[#937052] text-[15px] font-semibold leading-none tracking-[-0.02em] text-white transition-all duration-200 hover:bg-[#8b6644]'>
            Discover More
          </button>
        </div>

        {/* Right columns */}
        <div className='mt-[34px] grid flex-1 grid-cols-1 gap-y-[28px] md:mt-[8px] md:grid-cols-3 md:gap-x-[38px] lg:gap-x-[56px] xl:gap-x-[72px]'>
          {formatColumns.map((column) => (
            <div key={column.title} className='w-full max-w-[180px]'>
              <h3 className='text-[16px] md:text-[20px] font-medium leading-none tracking-[-0.02em] text-[#CC8C33]'>
                {column.title}
              </h3>

              <div className='mt-[7px] h-px w-full bg-[#DDD6CE]' />

              <div className='mt-[10px] space-y-[2px] text-[16px] md:text-[20px] font-normal leading-[1.08] tracking-[-0.03em] text-[#555555]'>
                {column.items.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
