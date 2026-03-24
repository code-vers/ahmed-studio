import { Card, CardContent } from "@/components/ui/card";
import { BadgeCheck, Globe, RefreshCw, Wrench } from "lucide-react";

const features = [
  {
    title: "High\nQuality",
    description: "Outputs built to last and exceed industry standards.",
    icon: BadgeCheck,
  },
  {
    title: "Clear\nDocumentation",
    description: "Clear logs and documentation for every project step.",
    icon: Wrench,
  },
  {
    title: "International\nStandards",
    description: "Expert processes aligned with international benchmarks.",
    icon: Globe,
  },
  {
    title: "Project\nLifecycle",
    description: "Smooth, disciplined management from start to finish.",
    icon: RefreshCw,
  },
];

export default function WhyAhmedStudioConsulting() {
  return (
    <section className='w-full py-14 md:py-16'>
      <div className='mx-auto w-[90%] max-w-[1120px]'>
        <h2 className='text-center text-[28px] font-semibold leading-tight text-[#8b6524] md:text-[40px]'>
          Why Ahmed Studio Consulting?
        </h2>

        <div className='mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6'>
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <Card
                key={item.title}
                className='rounded-[16px] border-0 bg-[#ede7e1] shadow-none'>
                <CardContent className='flex min-h-[190px] flex-col items-center px-5 py-6 text-center'>
                  <div className='flex h-[48px] w-[48px] items-center justify-center rounded-[6px] bg-[#b6906a]'>
                    <Icon className='h-6 w-6 text-white stroke-[1.8]' />
                  </div>

                  <h3 className='mt-5 whitespace-pre-line text-[18px] font-semibold leading-[1.15] text-[#8b6524] md:text-[19px]'>
                    {item.title}
                  </h3>

                  <p className='mt-3 max-w-[185px] text-[13px] leading-[1.45] text-[#3f3a37]'>
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className='mt-10 flex justify-center'>
          <button
            type='button'
            className='rounded-[6px] bg-[#b6906a] px-7 py-3 text-[16px] font-semibold text-white transition hover:bg-[#a9835f]'>
            Book Your Free 15-Min Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
