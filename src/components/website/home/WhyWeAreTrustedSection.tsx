import { FaUserNurse } from "react-icons/fa6";
import {
  FiCalendar,
  FiCamera,
  FiHeadphones,
  FiLock,
  FiShield,
  FiStar,
  FiTool,
} from "react-icons/fi";
import { HiOutlineBadgeCheck } from "react-icons/hi";

const WhyWeAreTrustedSection = () => {
  const topItems = [
    { icon: <FiCamera />, title: "Calibrated Equipment" },
    { icon: <FiTool />, title: "Full Refurbished" },
    { icon: <FiCalendar />, title: "Maintenance Routine" },
    { icon: <FiLock />, title: "Confidentiality" },
  ];

  const bottomItems = [
    { icon: <FiShield />, title: "Security" },
    { icon: <FaUserNurse />, title: "Female Staff" },
    { icon: <HiOutlineBadgeCheck />, title: "High Quality Output" },
    { icon: <FiHeadphones />, title: "After Sale Service" },
    { icon: <FiStar />, title: "Excellent Client Experience" },
  ];

  const Card = ({ icon, title }: { icon: React.ReactNode; title: string }) => (
    <div className='flex min-h-[180px] sm:min-h-[220px] md:min-h-[320px] w-full flex-col items-center justify-center rounded-[14px] bg-[#EEE8E2] px-3 sm:px-4 pt-6 sm:pt-8 md:pt-10 text-center'>
      <div className='flex h-[64px] w-[64px] sm:h-[80px] sm:w-[80px] md:h-[100px] md:w-[100px] items-center justify-center rounded-[6px] bg-[#B9926C] text-[28px] sm:text-[34px] md:text-[42px] text-white'>
        {icon}
      </div>

      <h3 className='mt-4 sm:mt-5 text-[14px] sm:text-[16px] md:text-[18px] font-semibold leading-[1.3] text-[#946B2E]'>
        {title}
      </h3>
    </div>
  );

  return (
    <section className='w-full py-10 sm:py-14 md:py-16'>
      <div className='mx-auto w-full'>
        <h2 className='mb-8 sm:mb-10 md:mb-12 text-center text-[24px] sm:text-[30px] md:text-[38px] font-semibold leading-tight tracking-[-0.02em] text-[#8A6545]'>
          Why We Are Trusted
        </h2>

        {/* Top Row */}
        <div className='grid grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:grid-cols-4 lg:gap-8'>
          {topItems.map((item) => (
            <Card key={item.title} icon={item.icon} title={item.title} />
          ))}
        </div>

        {/* Bottom Row */}
        <div className='mt-4 sm:mt-5 md:mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 md:gap-6 lg:grid-cols-5 lg:gap-8'>
          {bottomItems.map((item) => (
            <Card key={item.title} icon={item.icon} title={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWeAreTrustedSection;
