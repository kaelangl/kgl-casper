// app/page.tsx
import ProductInfo from "../components/ProductInfo";
import ProductImageDisplay from "../components/ProductImageDisplay";
import ProductOptions from "../components/ProductOptions";
import ProductFeatures from "../components/ProductFeatures";
import ProductImageGrid from "../components/ProductImageGrid";
import ProductDetails from "../components/ProductDetails";
import CalloutSection from "../components/CalloutSection";
import ProductAccordion from "../components/ProductAccordion";
import QuestionsCallout from "../components/QuestionsCallout";
import FullBleedHeroStatement from "../components/FullBleedHeroStatement";
import TabbedSection from "../components/TabbedSection";
import VideoPlayer from "../components/VideoPlayer";
import WelcomeSection from "../components/WelcomeSection";
import HelpSection from "../components/HelpSection";
import ProductHighlight from "../components/ProductHighlight";
import FaqSection from "../components/FaqSection";
import ReviewsSection from "../components/ReviewsSection";
import HorizontalProductGrid4 from "../components/HorizontalProductGrid4";

export default function HomePage() {
  return (
    <main className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-8">
        {" "}
        {/* Two-column layout for desktop */}
        <div className="w-full md:w-2/3 space-y-8">
          <ProductImageDisplay />
          <ProductFeatures />
          <ProductImageGrid />
          <VideoPlayer />
        </div>
        <div className="w-full md:w-1/3 space-y-6">
          <ProductInfo />
          <ProductOptions />
          <ProductDetails />
          <CalloutSection />
          <ProductAccordion />
          <QuestionsCallout />
        </div>
      </div>

      <FullBleedHeroStatement />
      <TabbedSection />
      <WelcomeSection />
      <HelpSection />
      <ProductHighlight />
      <FaqSection />
      <ReviewsSection />
      <HorizontalProductGrid4 />
    </main>
  );
}
