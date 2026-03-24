"use client";

const services = [
  {
    title: "Workflow Design & Project Planning",
    items: [
      "Media assessment and prioritization",
      "Tape and film handling rules",
      "Digitization standards (RAW) Preservation (masters)",
      "Quality control and validation steps",
    ],
  },
  {
    title: "Archive Evaluation & Media Treatment",
    items: [
      "Media condition and risks",
      "Required treatments before digitization",
      "Best technical approach for format",
      "Preservation priorities",
    ],
  },
  {
    title: "Technical Proposals & RFP Support",
    items: [
      "Writing and reviewing RFPs",
      "Defining technical specifications",
      "Setting quality and delivery benchmarks",
      "Avoiding vague or risky requirements",
    ],
  },
  {
    title: "Equipment Selection & Supply",
    items: [
      "Professional digitization machines",
      "Restoration and processing systems",
      "Storage and backup solutions",
      "Avoiding vague or risky requirements",
    ],
  },
  {
    title: "Project Supervision & Quality Assurance",
    items: [
      "Monitoring workflows and outputs",
      "Ensuring compliance with international best practices",
      "Verifying file integrity, formats, and metadata",
      "Aligning the project with its original goals",
    ],
  },
];

const ConsultingServices = () => {
  return (
    <section className='relative w-full py-20 bg-black text-white'>
      {/* Background Image */}
      <div className='absolute inset-0'>
        <img
          src='/images/website/consultant/consult-serv.jpg'
          alt='background'
          className='w-full h-full object-cover opacity-40'
        />
      </div>

      {/* Overlay */}
      <div className='absolute inset-0 bg-black/30' />

      <div className='relative max-w-7xl mx-auto px-6'>
        {/* Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8'>
          {services.map((service, index) => (
            <div
              key={index}
              className='bg-white/10 backdrop-blur-md rounded-2xl px-6 py-8 border border-white/20 hover:bg-white/20 transition lg:h-[523px] h-auto flex flex-col'>
              {/* Title */}
              <div className='h-[120px] flex items-start justify-center text-center'>
                <h3 className='text-[18px] font-semibold leading-snug'>
                  {service.title}
                </h3>
              </div>

              {/* List */}
              <div>
                <ul className='flex flex-col gap-5 text-sm text-gray-300 leading-relaxed'>
                  {service.items.map((item, i) => (
                    <li key={i} className='flex items-start gap-3'>
                      <span className='mt-[7px] text-[10px] text-white'>•</span>
                      <span className='block'>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsultingServices;
