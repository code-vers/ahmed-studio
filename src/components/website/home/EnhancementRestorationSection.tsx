/* eslint-disable @next/next/no-img-element */
const EnhancementRestorationSection = () => {
  return (
    <div className='flex flex-col gap-5 sm:gap-6 my-16 lg:my-26'>
      {/* Section Title */}
      <h2 className='text-center text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-semibold text-[#937052] mb-10 px-4'>
        Enhancement & Restoration
      </h2>

      {/* Top Images */}
      <div className='flex flex-col lg:flex-row justify-center items-center w-[92%] sm:w-[90%] lg:w-[85%] mx-auto gap-4 sm:gap-5'>
        {/* Image 1 */}
        <div className='relative w-full lg:w-auto'>
          <img
            className='w-full lg:w-[760px] h-[240px] sm:h-[300px] md:h-[340px] lg:h-[363px] rounded-[20px] lg:rounded-[24px] object-cover'
            src='/images/website/home/enhancement-restoration-1.jpg'
            alt='Spectacular AI Enhancement'
          />

          <div className='absolute inset-0 flex flex-col text-center justify-end p-4 sm:p-5 lg:p-6 text-white bg-black/30 rounded-[20px] lg:rounded-[24px]'>
            <h3 className='text-[18px] sm:text-[20px] lg:text-xl font-semibold'>
              Spectacular AI Enhancement
            </h3>
            <p className='text-[12px] sm:text-sm mt-1 max-w-[420px] mx-auto leading-[1.4]'>
              Transform blurry, aged footage into crisp, high-definition
              memories using our advanced AI-driven upscaling technology.
            </p>
          </div>
        </div>

        {/* Image 2 */}
        <div className='relative w-full lg:w-auto'>
          <img
            className='w-full lg:w-[760px] h-[240px] sm:h-[300px] md:h-[340px] lg:h-[363px] rounded-[20px] lg:rounded-[24px] object-cover'
            src='/images/website/home/enhancement-restoration-2.png'
            alt='Pro-Grade Accuracy'
          />

          <div className='absolute inset-0 flex flex-col justify-end p-4 sm:p-5 lg:p-6 text-white bg-black/30 rounded-[20px] lg:rounded-[24px]'>
            <h3 className='text-[18px] sm:text-[20px] lg:text-xl text-center font-semibold'>
              Pro-Grade Accuracy
            </h3>
            <p className='text-[12px] sm:text-sm text-center mt-1 max-w-[420px] mx-auto leading-[1.4]'>
              By capturing materials in true RAW form, we guarantee an
              uncompressed foundation of your original content.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Images */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:flex justify-center items-center w-[92%] sm:w-[90%] lg:w-[85%] mx-auto gap-4 sm:gap-5'>
        {/* Image 3 */}
        <div className='relative w-full lg:w-auto md:col-span-1'>
          <img
            className='w-full lg:w-[500px] h-[240px] sm:h-[280px] md:h-[300px] lg:h-[325px] rounded-[20px] lg:rounded-[24px] object-cover'
            src='/images/website/home/enhancement-restoration-3.png'
            alt='Pure Archival Sound'
          />

          <div className='absolute inset-0 flex flex-col text-center justify-end p-4 sm:p-5 lg:p-6 text-white bg-black/30 rounded-[20px] lg:rounded-[24px]'>
            <h3 className='text-[16px] sm:text-[18px] lg:text-lg font-semibold'>
              Pure Archival Sound
            </h3>
            <p className='text-[12px] sm:text-sm mt-1 leading-[1.4]'>
              We ensure every bit of information in a photo or video
            </p>
          </div>
        </div>

        {/* Image 4 */}
        <div className='relative w-full lg:w-auto md:col-span-1'>
          <img
            className='w-full lg:w-[500px] h-[240px] sm:h-[280px] md:h-[300px] lg:h-[325px] rounded-[20px] lg:rounded-[24px] object-cover'
            src='/images/website/home/enhancement-restoration-4.jpg'
            alt='35mm Precision'
          />

          <div className='absolute inset-0 flex flex-col text-center justify-end p-4 sm:p-5 lg:p-6 text-white bg-black/30 rounded-[20px] lg:rounded-[24px]'>
            <h3 className='text-[16px] sm:text-[18px] lg:text-lg font-semibold'>
              35mm Precision
            </h3>
            <p className='text-[12px] sm:text-sm mt-1 leading-[1.4]'>
              Specialized restoration for 35mm film or sleeves
            </p>
          </div>
        </div>

        {/* Image 5 */}
        <div className='relative w-full lg:w-auto md:col-span-2 lg:col-span-1'>
          <img
            className='w-full lg:w-[500px] h-[240px] sm:h-[280px] md:h-[300px] lg:h-[325px] rounded-[20px] lg:rounded-[24px] object-cover'
            src='/images/website/home/enhancement-restoration-5.jpg'
            alt='Global Best Practices'
          />

          <div className='absolute inset-0 flex flex-col text-center justify-end p-4 sm:p-5 lg:p-6 text-white bg-black/30 rounded-[20px] lg:rounded-[24px]'>
            <h3 className='text-[16px] sm:text-[18px] lg:text-lg font-semibold'>
              Global Best Practices
            </h3>
            <p className='text-[12px] sm:text-sm mt-1 leading-[1.4]'>
              We avoid costly mistakes by using the right equipment and strategy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancementRestorationSection;
