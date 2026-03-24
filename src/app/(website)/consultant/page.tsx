import ConsultantBanner from "@/components/website/consultant/ConsultantBanner";
import ConsultantInfoSection from "@/components/website/consultant/ConsultantInfoSection";
import { WebLayout } from "@/components/website/layouts/WebLayout";

const page = () => {
  return (
    <WebLayout>
      <ConsultantBanner />
      <ConsultantInfoSection />
    </WebLayout>
  );
};

export default page;
