import AboutBanner from "@/components/website/about-us/AboutBanner";
import AboutUsSection from "@/components/website/about-us/AboutUsSection";
import AudioTapesSection from "@/components/website/about-us/AudioTapesSection";
import DvdsMiniDvdsSection from "@/components/website/about-us/DvdsMiniDvdsSection";
import MovieFilmsSection from "@/components/website/about-us/MovieFilmsSection";
import PhotoSlidesSection from "@/components/website/about-us/PhotoSlidesSection";
import VideoTapesSection from "@/components/website/about-us/VideoTapesSection";
import { WebLayout } from "@/components/website/layouts/WebLayout";

export default function AboutUs() {
  return (
    <WebLayout>
      <AboutBanner />
      <AboutUsSection />
      <MovieFilmsSection />
      <AudioTapesSection />
      <VideoTapesSection />
      <PhotoSlidesSection />
      <DvdsMiniDvdsSection />
    </WebLayout>
  );
}
