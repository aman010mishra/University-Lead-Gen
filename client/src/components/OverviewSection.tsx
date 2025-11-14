import { University } from "@shared/schema";

interface OverviewSectionProps {
  university: University;
}

export default function OverviewSection({ university }: OverviewSectionProps) {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            About {university.shortName}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {university.description}
          </p>
        </div>
        
        {/* Key Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="p-6 md:p-8 bg-card rounded-md border border-card-border" data-testid="card-academic-excellence">
            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-foreground">
              Academic Excellence
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Industry-aligned curriculum with focus on practical learning and skill development through hands-on projects and internships.
            </p>
          </div>
          
          <div className="p-6 md:p-8 bg-card rounded-md border border-card-border" data-testid="card-faculty">
            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-foreground">
              World-Class Faculty
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Learn from experienced professors and industry experts who bring real-world insights into the classroom.
            </p>
          </div>
          
          <div className="p-6 md:p-8 bg-card rounded-md border border-card-border" data-testid="card-research">
            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-foreground">
              Research & Innovation
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              State-of-the-art research facilities and innovation labs fostering cutting-edge research and entrepreneurship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
