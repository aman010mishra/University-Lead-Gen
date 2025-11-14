import { Facility } from "@shared/schema";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

interface FacilitiesSectionProps {
  facilities: Facility[];
  theme: "blue" | "green";
}

export default function FacilitiesSection({ facilities, theme }: FacilitiesSectionProps) {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Campus & Facilities
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience world-class infrastructure designed for holistic development
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {facilities.map((facility) => (
            <Card 
              key={facility.id} 
              className="overflow-hidden hover-elevate active-elevate-2 transition-all duration-300"
              data-testid={`facility-${facility.id}`}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                  {facility.name}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {facility.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
