import { Course } from "@shared/schema";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Download } from "lucide-react";

interface FeeModalProps {
  isOpen: boolean;
  onClose: () => void;
  courses: Course[];
  theme: "blue" | "green";
}

export default function FeeModal({ isOpen, onClose, courses, theme }: FeeModalProps) {
  const themeColors = {
    blue: "bg-blue-600 hover:bg-blue-700",
    green: "bg-emerald-600 hover:bg-emerald-700",
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto" data-testid="modal-fee-structure">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="text-2xl md:text-3xl font-bold">
                Course-wise Fee Structure
              </DialogTitle>
              <DialogDescription className="mt-2">
                Complete breakdown of tuition fees for all programs
              </DialogDescription>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-8 w-8"
              data-testid="button-close-modal"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="mt-6">
          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold text-foreground">Course Name</th>
                  <th className="text-left py-4 px-4 font-semibold text-foreground">Duration</th>
                  <th className="text-right py-4 px-4 font-semibold text-foreground">Total Fees</th>
                  <th className="text-right py-4 px-4 font-semibold text-foreground">Per Semester</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course, index) => (
                  <tr 
                    key={course.id} 
                    className={`border-b border-border hover-elevate ${index % 2 === 0 ? 'bg-card' : 'bg-background'}`}
                    data-testid={`fee-row-${course.id}`}
                  >
                    <td className="py-4 px-4 font-medium text-foreground">{course.name}</td>
                    <td className="py-4 px-4 text-muted-foreground">{course.duration}</td>
                    <td className="py-4 px-4 text-right font-semibold text-foreground">{course.totalFees}</td>
                    <td className="py-4 px-4 text-right text-muted-foreground">{course.perSemester}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Mobile Card View */}
          <div className="md:hidden space-y-4">
            {courses.map((course) => (
              <div 
                key={course.id} 
                className="p-4 bg-card rounded-md border border-card-border"
                data-testid={`fee-card-${course.id}`}
              >
                <h3 className="font-semibold text-foreground mb-3">{course.name}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-medium text-foreground">{course.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Fees:</span>
                    <span className="font-semibold text-foreground">{course.totalFees}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Per Semester:</span>
                    <span className="font-medium text-foreground">{course.perSemester}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <DialogFooter className="mt-6 flex-col sm:flex-row gap-3">
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto"
            data-testid="button-download-brochure-modal"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Detailed Brochure
          </Button>
          <Button
            size="lg"
            className={`w-full sm:w-auto ${themeColors[theme]} text-white`}
            onClick={() => {
              onClose();
              document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' });
            }}
            data-testid="button-apply-now-modal"
          >
            Apply Now
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
