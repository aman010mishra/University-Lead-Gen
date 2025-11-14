import { Course } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { GraduationCap, Laptop, FlaskConical, Building2, Briefcase, Palette } from "lucide-react";

interface CoursesSectionProps {
  courses: Course[];
  theme: "blue" | "green";
  onCheckFees: () => void;
}

const iconMap: Record<string, any> = {
  "graduation-cap": GraduationCap,
  "laptop": Laptop,
  "flask": FlaskConical,
  "building": Building2,
  "briefcase": Briefcase,
  "palette": Palette,
};

export default function CoursesSection({ courses, theme, onCheckFees }: CoursesSectionProps) {
  const themeColors = {
    blue: "bg-blue-600 hover:bg-blue-700",
    green: "bg-emerald-600 hover:bg-emerald-700",
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Our Programs
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from a wide range of industry-relevant programs designed to prepare you for successful careers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {courses.map((course) => {
            const Icon = iconMap[course.icon] || GraduationCap;
            
            return (
              <Card 
                key={course.id} 
                className="hover-elevate active-elevate-2 transition-all duration-300"
                data-testid={`course-card-${course.id}`}
              >
                <CardHeader className="space-y-4">
                  <div className={`w-14 h-14 rounded-md ${theme === 'blue' ? 'bg-blue-100' : 'bg-emerald-100'} flex items-center justify-center`}>
                    <Icon className={`w-7 h-7 ${theme === 'blue' ? 'text-blue-600' : 'text-emerald-600'}`} />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-2 text-foreground">
                      {course.name}
                    </h3>
                    <p className="text-sm text-muted-foreground font-medium">
                      {course.duration}
                    </p>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {course.description}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Fees:</span>
                      <span className="font-semibold text-foreground">{course.totalFees}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Per Semester:</span>
                      <span className="font-semibold text-foreground">{course.perSemester}</span>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    data-testid={`button-view-details-${course.id}`}
                  >
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center">
          <Button 
            size="lg"
            className={`${themeColors[theme]} text-white h-12 md:h-14 px-8 md:px-10 text-base md:text-lg font-semibold`}
            onClick={onCheckFees}
            data-testid="button-check-fees-courses"
          >
            Check Course-wise Fees
          </Button>
        </div>
      </div>
    </section>
  );
}
