import Image from 'next/image';
import bannerImg from '../../../../public/images/website/cloud-storage/banner.jpg';

const CloudStorageBanner = () => {
  return (
    <div className='px-28 lg:max-w-[80%] mx-auto pb-16 pt-4  '>
      <Image src={bannerImg} className='max-h-[80vh] mx-auto  rounded-3xl ' alt='banner'/>
    </div>
  );
};

export default CloudStorageBanner;