import { PlacementData } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

interface PlacementsSectionProps {
  placements: PlacementData;
  theme: "blue" | "green";
  onCheckFees: () => void;
}

export default function PlacementsSection({ placements, theme, onCheckFees }: PlacementsSectionProps) {
  const themeColors = {
    blue: "bg-blue-600 hover:bg-blue-700",
    green: "bg-emerald-600 hover:bg-emerald-700",
  };

  const themeAccent = {
    blue: "text-blue-600 bg-blue-50",
    green: "text-emerald-600 bg-emerald-50",
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Placements & Career Success
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Our students are recruited by leading companies across diverse industries
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center mb-12">
          {/* Stats Column */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="p-6 bg-card rounded-md border border-card-border">
                <div className="text-sm font-medium text-muted-foreground mb-2">Placement Rate</div>
                <div className={`text-4xl md:text-5xl font-bold ${theme === 'blue' ? 'text-blue-600' : 'text-emerald-600'}`}>
                  {placements.placementPercentage}
                </div>
              </div>
              
              <div className="p-6 bg-card rounded-md border border-card-border">
                <div className="text-sm font-medium text-muted-foreground mb-2">Average Package</div>
                <div className={`text-4xl md:text-5xl font-bold ${theme === 'blue' ? 'text-blue-600' : 'text-emerald-600'}`}>
                  {placements.averagePackage}
                </div>
              </div>
              
              <div className="p-6 bg-card rounded-md border border-card-border">
                <div className="text-sm font-medium text-muted-foreground mb-2">Highest Package</div>
                <div className={`text-4xl md:text-5xl font-bold ${theme === 'blue' ? 'text-blue-600' : 'text-emerald-600'}`}>
                  {placements.highestPackage}
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              {placements.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className={`w-5 h-5 mt-0.5 flex-shrink-0 ${theme === 'blue' ? 'text-blue-600' : 'text-emerald-600'}`} />
                  <span className="text-muted-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Recruiters Column */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
              Top Recruiters
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {placements.topRecruiters.map((recruiter, index) => (
                <div
                  key={index}
                  className="p-6 bg-card rounded-md border border-card-border flex items-center justify-center h-24 hover-elevate transition-all"
                  data-testid={`recruiter-${index}`}
                >
                  <span className="text-base md:text-lg font-semibold text-foreground text-center">
                    {recruiter}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Button 
            size="lg"
            className={`${themeColors[theme]} text-white h-12 md:h-14 px-8 md:px-10 text-base md:text-lg font-semibold`}
            onClick={onCheckFees}
            data-testid="button-check-fees-placements"
          >
            Check Course-wise Fees
          </Button>
        </div>
      </div>
    </section>
  );
}
