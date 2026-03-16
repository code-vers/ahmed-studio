import InstantAccessReturnedSection from "./InstantAccessReturnedSection";
import PlaceOrderSection from "./PlaceOrderSection";
import ShipmentDigitizationSection from "./ShipmentDigitizationSection";

const OrderProcessSection = () => {
  return (
    <section>
      <PlaceOrderSection />
      <ShipmentDigitizationSection />
      <InstantAccessReturnedSection />
    </section>
  );
};

export default OrderProcessSection;
