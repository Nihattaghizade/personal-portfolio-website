import Sidebar from "@/components/Sidebar";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Main Container */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Sidebar - Fixed on desktop, top on mobile */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-1 lg:ml-0">
          <Navigation />
          <HeroSection />
        </div>
      </div>
    </div>
  );
}
