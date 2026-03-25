import AboutBanner from "@/components/website/about-us/AboutBanner";
import AboutUsSection from "@/components/website/about-us/AboutUsSection";
import AudioTapesSection2 from "@/components/website/about-us/AudioTapesSection2";
import DvdsMiniDvdsSection2 from "@/components/website/about-us/DvdsMiniDvdsSection2";
import MovieFilmsSection2 from "@/components/website/about-us/MovieFilmsSection2";
import PhotoSlidesSection2 from "@/components/website/about-us/PhotoSlidesSection2";
import ServicesAndPricing from "@/components/website/about-us/ServicesAndPricing";
import TapeTreatment from "@/components/website/about-us/TapeTreatment";
import VideoTapesSection2 from "@/components/website/about-us/VideoTapesSection2";
import { WebLayout } from "@/components/website/layouts/WebLayout";

export default function AboutUs() {
  return (
    <WebLayout>
      <AboutBanner />
      <AboutUsSection />
      <MovieFilmsSection2 />
      <AudioTapesSection2 />
      <VideoTapesSection2 />
      <PhotoSlidesSection2 />
      <DvdsMiniDvdsSection2 />
      <TapeTreatment />
      <ServicesAndPricing />
      {/* <MovieFilmsSection />
      <AudioTapesSection />
      <VideoTapesSection />
      <PhotoSlidesSection />
      <DvdsMiniDvdsSection /> */}
    </WebLayout>
  );
}
