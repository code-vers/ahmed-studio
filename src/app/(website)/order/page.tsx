import { WebLayout } from "@/components/website/layouts/WebLayout";
import FAQSection from "@/components/website/order/FAQSection";
import OrderBannerSection from "@/components/website/order/OrderBannerSection";
import OrderProcessSection from "@/components/website/order/OrderProcessSection";

const page = () => {
  return (
    <WebLayout>
      <OrderBannerSection />
      <OrderProcessSection />
      <FAQSection />
    </WebLayout>
  );
};

export default page;
