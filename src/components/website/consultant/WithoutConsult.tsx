import {
  AlertTriangle,
  ArchiveX,
  BadgeX,
  Database,
  FileText,
  FolderSearch,
  HardDrive,
  Landmark,
  ScanSearch,
  ShieldAlert,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const riskItems = [
  {
    icon: FileText,
    title: "Low Quality Outputs",
    text: "Without checks in place, your digitized files can contain errors, poor readability, and output that fails to meet archival or compliance standards.",
  },
  {
    icon: ShieldAlert,
    title: "Wrong Hardware Selection",
    text: "Choosing scanners, media players, or storage formats without expert guidance can reduce efficiency and compromise long-term preservation.",
  },
  {
    icon: BadgeX,
    title: "Non-Recommended Software",
    text: "Using outdated or unsuitable tools can cause processing issues, format incompatibility, and avoidable workflow delays.",
  },
  {
    icon: ArchiveX,
    title: "Incorrect Codecs, Containers",
    text: "Improper encoding or file packaging choices can make assets harder to access, share, or preserve reliably over time.",
  },
  {
    icon: ScanSearch,
    title: "Inaccurate Capture Methods",
    text: "Poor capture settings during digitization introduce flaws that affect image accuracy, audio fidelity, and overall usability.",
  },
  {
    icon: AlertTriangle,
    title: "Irreversible Quality Loss",
    text: "Once materials are digitized incorrectly, some losses cannot be recovered—leading to wasted time, expense, and compromised records.",
  },
];

const hiddenConsequences = [
  {
    icon: Landmark,
    text: "Lost historical and cultural value",
  },
  {
    icon: Workflow,
    text: "Technical incompatibility in the future",
  },
  {
    icon: Database,
    text: "Increased long-term costs",
  },
  {
    icon: ArchiveX,
    text: "Permanent damage to irreplaceable content",
  },
];

const approachItems = [
  {
    icon: HardDrive,
    text: "Long-term preservation of your content",
  },
  {
    icon: FolderSearch,
    text: "Reliable and future access to your media",
  },
  {
    icon: FileText,
    text: "Proper metadata application, enabling search, identification, rights management, and historical context",
  },
  {
    icon: ShieldCheck,
    text: "Authentic, preservation-grade master files that will never need to be digitized again",
  },
];

const WithoutConsult = () => {
  return (
    <section className='w-full bg-white px-4 py-8 sm:px-6 md:px-8 lg:px-10 lg:py-10'>
      <div className='mx-auto w-full max-w-[80%]'>
        {/* heading */}
        <div className='pb-4 text-center sm:pb-6 lg:pb-4'>
          <h1 className='my-6 text-[34px] font-semibold leading-[1.08] tracking-[-0.02em] text-[#77510A] sm:my-7 sm:text-[40px] lg:my-8 lg:text-[48px]'>
            <span className='block'>What Happens</span>
            <span className='block'>Without a Consultant?</span>
          </h1>
        </div>

        {/* hero */}
        <div className='mx-auto w-full'>
          <div className='relative overflow-hidden rounded-[10px] bg-[#2a2826] h-[320px] sm:h-[420px] md:h-[520px] lg:h-[630px]'>
            <img
              src='/images/website/consultant/without-consult.jpg'
              alt='Unguided digitization'
              className='absolute inset-0 h-full w-full object-cover'
            />
            <div className='absolute inset-0 bg-black/42' />
            <div className='absolute inset-0 bg-gradient-to-r from-black/60 via-black/28 to-transparent' />

            <div className='absolute left-4 right-4 top-auto bottom-5 text-white sm:left-7 sm:bottom-8 md:left-8 md:bottom-10 lg:left-[34px] lg:right-auto lg:top-[220px] lg:bottom-auto lg:max-w-[670px]'>
              <div className='font-serif text-[34px] leading-[1.02] tracking-[-0.02em] sm:text-[44px] md:text-[54px] lg:text-[64px]'>
                The <span className='font-semibold text-[#cb2b1d]'>Risks</span>{" "}
                of
              </div>
              <div className='font-serif text-[34px] leading-[1.04] tracking-[-0.02em] sm:text-[44px] md:text-[54px] lg:text-[64px]'>
                Unguided Digitization
              </div>

              <p className='mt-3 max-w-[410px] text-[13px] leading-[1.5] text-white/82 sm:mt-4 sm:text-[14px] md:text-[15px] lg:text-[16px]'>
                Poor hardware and software choices lead to compromised signal
                integrity and lost original detail.
              </p>
            </div>
          </div>
        </div>

        {/* risks section */}
        <div className='mx-auto w-full px-0 pt-8 sm:pt-10 lg:pt-[26px]'>
          <div className='text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8f8a81] sm:text-[11px]'>
            COMMON RISKS
          </div>

          <h2 className='mt-[6px] text-[28px] font-semibold tracking-[-0.03em] text-[#2a2826] sm:text-[30px] md:text-[32px] lg:text-[34px]'>
            What Can Go Wrong Without Expert Guidance
          </h2>

          <div className='mt-7 grid grid-cols-1 gap-x-8 gap-y-7 md:grid-cols-2 lg:mt-[28px] lg:gap-x-[44px] lg:gap-y-[28px]'>
            {riskItems.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className='flex gap-3.5 lg:gap-[14px]'>
                  <div className='mt-[2px] flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-[6px] border border-[#ddd5ca] bg-[#f8f4ed] text-[#8a6d36]'>
                    <Icon size={18} strokeWidth={2} />
                  </div>

                  <div>
                    <h3 className='text-[15px] font-semibold leading-[1.2] text-[#2d2b27] sm:text-[16px]'>
                      {item.title}
                    </h3>
                    <p className='mt-[6px] max-w-[420px] text-[13px] leading-[1.55] text-black'>
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* warning */}
          <div className='mt-8 rounded-[10px] border border-[#F59F0A] bg-[#FDF5E6] px-4 py-4 sm:px-5 lg:mt-[30px] lg:px-[20px] lg:py-[16px]'>
            <div className='flex items-start gap-[10px]'>
              <div className='mt-[2px] flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-[6px] border border-[#f2c97d] bg-[#fff7e6] text-[#F59F0A]'>
                <AlertTriangle size={16} strokeWidth={2} />
              </div>

              <div>
                <div className='text-[15px] font-semibold text-[#5f5444] sm:text-[16px]'>
                  The Consequence
                </div>
                <p className='mt-[6px] text-[13px] leading-[1.55] text-[#6c6255]'>
                  In many cases, these mistakes lead to project failure, forcing
                  organizations to re-digitize the entire archive, increasing
                  cost, time, and risk-if the original media is still playable.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* lower two cards */}
        <div className='mt-12 sm:mt-14 lg:mt-[70px]'>
          <div className='mx-auto grid w-full grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:gap-[18px]'>
            <div className='rounded-[14px] border border-[#cfc8bf] bg-[#f7f4ef] px-5 py-5 sm:px-6 sm:py-6 lg:px-[26px] lg:py-[22px]'>
              <div className='text-[11px] font-medium uppercase tracking-[0.08em] text-[#a77a42]'>
                Hidden Consequences
              </div>

              <h3 className='mt-[8px] max-w-[360px] text-[28px] font-medium leading-[1.08] tracking-[-0.03em] text-[#1f1f1d] sm:text-[30px] md:text-[32px] lg:text-[34px]'>
                The True Cost of
                <br />
                Doing It Wrong
              </h3>

              <p className='mt-[14px] max-w-[370px] text-[14px] leading-[1.55] text-[#5f5a54]'>
                Poor digitization decisions may appear cost-effective at the
                beginning, but they often result in:
              </p>

              <div className='mt-7 space-y-4 sm:mt-8 sm:space-y-[18px] lg:mt-[34px]'>
                {hiddenConsequences.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.text}
                      className='flex items-start gap-[10px]'>
                      <div className='mt-[2px] flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-[6px] bg-[#fbefe6] text-[#d08b63]'>
                        <Icon size={13} strokeWidth={1.9} />
                      </div>
                      <p className='text-[14px] leading-[1.45] text-[#3f3d39]'>
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className='rounded-[14px] border border-[#cfc8bf] bg-[#f7f4ef] px-5 py-5 sm:px-6 sm:py-6 lg:px-[26px] lg:py-[22px]'>
              <div className='text-[11px] font-medium uppercase tracking-[0.08em] text-[#a77a42]'>
                Our Approach
              </div>

              <h3 className='mt-[8px] max-w-[390px] text-[28px] font-medium leading-[1.08] tracking-[-0.03em] text-[#1f1f1d] sm:text-[30px] md:text-[32px] lg:text-[34px]'>
                Digitization as a
                <br />
                Preservation Strategy
              </h3>

              <p className='mt-[14px] max-w-[395px] text-[14px] leading-[1.55] text-[#5f5a54]'>
                Digitization is not simply about a VTR and an analog-to-digital
                converter. It is a comprehensive system of hardware, software,
                workflows, standards, and preservation strategies designed to
                protect your archive for the long term.
              </p>

              <div className='mt-7 space-y-4 sm:mt-8 sm:space-y-[18px] lg:mt-[34px]'>
                {approachItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.text}
                      className='flex items-start gap-[10px]'>
                      <div className='mt-[2px] flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-[6px] bg-[#edf5f7] text-[#7ea5b3]'>
                        <Icon size={13} strokeWidth={1.9} />
                      </div>
                      <p className='text-[14px] leading-[1.45] text-[#3f3d39]'>
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className='mx-auto mt-14 max-w-[840px] px-2 text-center sm:mt-16 lg:mt-[72px]'>
            <h2 className='text-[34px] font-semibold leading-[1.08] tracking-[-0.04em] text-[#171715] sm:text-[42px] md:text-[46px] lg:text-[52px]'>
              Ready to Preserve Your Archives Properly?
            </h2>

            <p className='mx-auto mt-[16px] max-w-[720px] text-[16px] leading-[1.55] text-[#4e4a45] sm:text-[17px] lg:text-[18px]'>
              Get expert consultation to ensure your digitization project meets
              the highest preservation standards.
            </p>

            <button className='mx-auto mt-8 inline-flex h-[52px] items-center justify-center rounded-[8px] bg-[#a88258] px-6 text-[16px] font-semibold text-white transition hover:opacity-95 sm:h-[54px] sm:px-8 sm:text-[17px] lg:mt-[34px] lg:h-[56px] lg:px-[30px] lg:text-[18px]'>
              Schedule A Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WithoutConsult;
