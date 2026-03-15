import { FiCheck } from "react-icons/fi";

const SubscriptionPlan = () => {
  const plans = [
    {
      name: "Trial Plan",
      price: "£0",
      desc: "Experience the magic of your digital history.",
      features: [
        "Secure 5GB Storage",
        "14 Days of Free Access",
        "4 free guest accounts",
        "Multi-Device Streaming",
        "Global Sharing",
      ],
      highlight: false,
    },
    {
      name: "Standard Cloud",
      price: "£24",
      desc: "Secure, long-term hosting for home movies.",
      features: [
        "Secure 10GB storage",
        "AI Tagging & Indexing",
        "Deep Search Functionality",
        "Multi-Platform Access",
        "Extended Hosting",
      ],
      highlight: true,
    },
    {
      name: "Pro Archival",
      price: "£100",
      desc: "Enterprise-grade preservation for large collections.",
      features: [
        "Secure 20GB + Storage",
        "RFP Development Support",
        "Comprehensive Archive",
        "Test Digitization Samples",
        "Unlimited Sharing",
      ],
      highlight: false,
    },
  ];

  return (
    <section className='w-full bg-white py-16 md:py-20'>
      <div className='mx-auto px-4 sm:px-6'>
        <h2 className='mb-10 md:mb-14 text-center text-[28px] md:text-[40px] font-semibold tracking-[-0.02em] text-[#8A6545]'>
          Subscription Plan
        </h2>

        <div className='flex flex-wrap items-end justify-center gap-5 md:gap-7'>
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col justify-between rounded-[14px] transition-all duration-300 ${
                plan.highlight
                  ? "w-full max-w-[320px] border border-black bg-[#FFFBF0] px-6 md:px-8 pt-6 md:pt-7 pb-7 md:pb-8 md:min-h-[470px] md:scale-[1.03]"
                  : "w-full max-w-[320px] bg-[#FFF1CC] px-5 md:px-6 pt-5 md:pt-6 pb-6 md:pb-7 md:min-h-[410px]"
              }`}>
              <div>
                <h3 className='mb-2 text-[16px] md:text-[18px] font-medium text-[#7B5A3B]'>
                  {plan.name}
                </h3>

                <div className='mb-3 flex items-end'>
                  <span
                    className={`font-bold leading-none text-black ${
                      plan.highlight
                        ? "text-[46px] md:text-[54px]"
                        : "text-[42px] md:text-[48px]"
                    }`}>
                    {plan.price}
                  </span>
                  <span className='ml-2 text-[13px] md:text-[14px] text-[#8A8A8A]'>
                    /Month
                  </span>
                </div>

                <p
                  className={`mb-5 leading-[1.35] text-[#7B6E62] ${
                    plan.highlight
                      ? "max-w-[280px] text-[14px] md:text-[15px]"
                      : "max-w-[250px] text-[13px] md:text-[14px]"
                  }`}>
                  {plan.desc}
                </p>

                <ul className='space-y-[10px] md:space-y-[11px]'>
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-center gap-[10px] leading-[1.25] text-[#555555] ${
                        plan.highlight
                          ? "text-[15px] md:text-[16px]"
                          : "text-[14px] md:text-[15px]"
                      }`}>
                      <span className='flex h-[22px] w-[22px] min-w-[22px] items-center justify-center rounded-full bg-[#4C4C4C]'>
                        <FiCheck className='text-[13px] text-white stroke-[3]' />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`mx-auto mt-8 rounded-[5px] font-semibold text-white ${
                  plan.highlight
                    ? "h-[42px] px-8 text-[14px] bg-black"
                    : "h-[40px] px-7 text-[13px] md:h-[42px] md:text-[14px] bg-[#937052]"
                }`}>
                Buy Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlan;
