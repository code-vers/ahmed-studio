import Image from 'next/image';
import bannerImg from '../../../../public/images/website/cloud-storage/banner.jpg';

const CloudStorageBanner = () => {
  return (
    <div className='px-28 pb-16 pt-4 mx-auto '>
      <Image src={bannerImg} className='max-h-[80vh] rounded-3xl ' alt='banner'/>
    </div>
  );
};

export default CloudStorageBanner;