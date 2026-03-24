import BeyondDigitization from "@/components/website/consultant/BeyondDigitization";
import ConsultantBanner from "@/components/website/consultant/ConsultantBanner";
import ConsultantInfoSection from "@/components/website/consultant/ConsultantInfoSection";
import ConsultingServices from "@/components/website/consultant/ConsultingServices";
import ProfessionalConsultingHero from "@/components/website/consultant/ProfessionalConsultingHero";
import ServeAndFuture from "@/components/website/consultant/ServeAndFuture";
import WhyAhmedStudioConsulting from "@/components/website/consultant/WhyAhmedStudioConsulting";
import WithoutConsult from "@/components/website/consultant/WithoutConsult";
import { WebLayout } from "@/components/website/layouts/WebLayout";

const page = () => {
  return (
    <WebLayout>
      <ConsultantBanner />
      <ConsultantInfoSection />
      <div>
        {/* Title */}
        <h2 className='text-center text-3xl md:text-[48px] font-semibold mt-16 mb-14 text-[#77510A] tracking-tight'>
          Our Consulting Services
        </h2>
        <ConsultingServices />
      </div>
      <ServeAndFuture />
      <WhyAhmedStudioConsulting />
      <WithoutConsult />
      <BeyondDigitization />
      <ProfessionalConsultingHero />
    </WebLayout>
  );
};

export default page;
