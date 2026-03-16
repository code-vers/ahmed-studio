const AboutUsSection = () => {
  return (
    <section className='w-full bg-white py-10'>
      <div className='mx-auto flex min-h-[222px] max-w-[85%] items-center justify-center px-4 py-10 sm:px-6 md:min-h-[240px] md:px-10 lg:min-h-[266px]'>
        <div className='text-center'>
          <h2 className='text-[24px] font-semibold leading-[1.2] text-[#1f1f1f] sm:text-[28px] md:text-[40px]'>
            About Us
          </h2>

          <p className='mx-auto mt-3 text-[#6C6C6C] text-[20px] md:text-[34px]'>
            We work to fully support digital transformation by leveraging
            technology to develop advanced archival solutions, digitize
            audiovisual materials, and transform traditional libraries into
            accessible digital libraries available at any time, in accordance
            with international preservation and archiving standards. We also
            provide professional restoration and enhancement services for
            images, videos, and audio recordings, in addition to solutions that
            accelerate digital transformation for our clients. Furthermore, we
            deliver effective solutions for the preservation, organization, and
            storage of archives, enabling secure, structured, and easy access to
            digital content—anytime and anywhere.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
