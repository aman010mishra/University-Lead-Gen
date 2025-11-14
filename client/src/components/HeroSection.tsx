import { University } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Download, Send, Award } from "lucide-react";

interface HeroSectionProps {
  university: University;
  onCheckFees: () => void;
}

export default function HeroSection({ university, onCheckFees }: HeroSectionProps) {
  const themeColors = {
    blue: "from-blue-900/90 to-blue-950/95",
    green: "from-emerald-900/90 to-emerald-950/95",
  };

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] lg:min-h-[800px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${university.heroImage})` }}
      />
      
      {/* Dark Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${themeColors[university.theme]}`} />
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl">
          {/* Logo/Badge */}
          <div className="mb-6 md:mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white/10 backdrop-blur-sm border border-white/20">
              <Award className="w-5 h-5 text-white" />
              <span className="text-white font-semibold text-sm md:text-base">
                {university.accreditations[0]}
              </span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
            {university.name}
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-3 md:mb-4 font-medium">
            {university.tagline}
          </p>
          
          {/* Stats Highlight */}
          <p className="text-base md:text-lg text-white/80 mb-8 md:mb-10 max-w-2xl">
            {university.stats.placementRate} Placement Record • {university.stats.avgPackage} Average Package
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-white/95 hover:bg-white text-gray-900 backdrop-blur-sm border border-white/20 h-12 md:h-14 px-6 md:px-8 text-base md:text-lg font-semibold"
              onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
              data-testid="button-apply-now-hero"
            >
              <Send className="w-5 h-5 mr-2" />
              Apply Now
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm h-12 md:h-14 px-6 md:px-8 text-base md:text-lg font-semibold"
              data-testid="button-download-brochure-hero"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Brochure
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-10 md:mt-12 flex flex-wrap gap-4 md:gap-6 items-center">
            {university.accreditations.slice(0, 3).map((accreditation, index) => (
              <div key={index} className="flex items-center gap-2 text-white/70 text-sm md:text-base">
                <div className="w-2 h-2 rounded-full bg-white/70" />
                <span>{accreditation}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
