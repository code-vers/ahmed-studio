import CloudStorageAboutPage from '@/components/website/cloud-storage/CloudStorageAboutPage';
import CloudStorageBanner from '@/components/website/cloud-storage/CloudStorageBanner';
import { WebLayout } from '@/components/website/layouts/WebLayout';

const page = () => {
  return (
  <WebLayout>
<CloudStorageBanner/>
<CloudStorageAboutPage/>
  </WebLayout>
  );
};

export default page;