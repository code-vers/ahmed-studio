import Image from 'next/image';
import ctaImage from '../../../../public/images/website/cloud-storage/cta.jpg';

const CTASection = () => {
  return (
    <div className="relative w-full my-16 max-w-[1170px] h-[626px] mx-auto rounded-lg overflow-hidden">

      {/* Background Image */}
      <Image
        src={ctaImage}
        alt="CTA Background"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/10" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-16 max-w-[680px]">

        {/* Headline */}
        <h1 className="text-[62px] font-extrabold leading-[1.1] text-white mb-4 tracking-tight font-serif">
          Enjoy your first{' '}
          <span className="text-yellow-400">14 days</span>
          <br />
          on us. Cancel anytime
        </h1>

        {/* Subtext */}
        <p className="text-[15px] text-white/85 leading-relaxed mb-9 max-w-[480px] font-sans font-normal">
          To ship your memories for digital conversion. Includes a crush-proof box,
          waterproof bags, shock-resistant cushions, and free FedEx shipping.
        </p>

        {/* CTA Button */}
        <div>
          <button className="px-9 py-[18px] bg-[#BC986E]/85 hover:bg-[#A07850] text-white text-[17px] font-bold rounded font-sans tracking-wide transition-colors duration-200 cursor-pointer border-none">
            Claim Your 14 Days
          </button>
        </div>

      </div>
    </div>
  );
};

export default CTASection;