import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { University } from "@shared/schema";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import OverviewSection from "@/components/OverviewSection";
import CoursesSection from "@/components/CoursesSection";
import PlacementsSection from "@/components/PlacementsSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import LeadFormSection from "@/components/LeadFormSection";
import Footer from "@/components/Footer";
import FeeModal from "@/components/FeeModal";

export default function UniversityA() {
  const [isFeeModalOpen, setIsFeeModalOpen] = useState(false);

  const { data: university, isLoading } = useQuery<University>({
    queryKey: ["/api/university/a"],
  });

  if (isLoading || !university) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading university information...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <HeroSection university={university} onCheckFees={() => setIsFeeModalOpen(true)} />
      <StatsBar stats={university.stats} theme={university.theme} />
      <OverviewSection university={university} />
      <CoursesSection courses={university.courses} theme={university.theme} onCheckFees={() => setIsFeeModalOpen(true)} />
      <PlacementsSection placements={university.placements} theme={university.theme} onCheckFees={() => setIsFeeModalOpen(true)} />
      <FacilitiesSection facilities={university.facilities} theme={university.theme} />
      <LeadFormSection university={university} />
      <Footer university={university} />
      <FeeModal 
        isOpen={isFeeModalOpen} 
        onClose={() => setIsFeeModalOpen(false)} 
        courses={university.courses}
        theme={university.theme}
      />
    </div>
  );
}
