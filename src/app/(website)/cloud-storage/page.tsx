import CloudFeatures from '@/components/website/cloud-storage/CloudFeatures';
import CloudStorageAboutPage from '@/components/website/cloud-storage/CloudStorageAboutPage';
import CloudStorageBanner from '@/components/website/cloud-storage/CloudStorageBanner';
import CTASection from '@/components/website/cloud-storage/CTASecton';
import FilmSection from '@/components/website/cloud-storage/FilmSection';
import MemoriesSection from '@/components/website/cloud-storage/MemoriesSection';
import MessageSection from '@/components/website/cloud-storage/MessageSection';
import { WebLayout } from '@/components/website/layouts/WebLayout';

const page = () => {
  return (
  <WebLayout>
<CloudStorageBanner/>
<CloudStorageAboutPage/>
<CloudFeatures/>
<FilmSection/>
<MemoriesSection/>
<MessageSection/>
<CTASection/>
  </WebLayout>
  );
};

export default page;