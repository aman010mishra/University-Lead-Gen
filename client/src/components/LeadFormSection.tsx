import { University, insertLeadSchema, indianStates, intakeYears } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, Send } from "lucide-react";
import { useState } from "react";

interface LeadFormSectionProps {
  university: University;
}

export default function LeadFormSection({ university }: LeadFormSectionProps) {
  const { toast } = useToast();
  const [showSuccess, setShowSuccess] = useState(false);

  const form = useForm({
    resolver: zodResolver(insertLeadSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      state: "",
      courseInterested: "",
      intakeYear: "",
      consent: "false",
      university: university.id,
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: any) => {
      return await apiRequest("POST", "/api/leads", data);
    },
    onSuccess: () => {
      // Invalidate relevant queries
      queryClient.invalidateQueries({ queryKey: ['/api/university', university.id] });
      queryClient.invalidateQueries({ queryKey: ['/api/leads'] });
      queryClient.invalidateQueries({ queryKey: ['/api/placements'] });
      
      setShowSuccess(true);
      form.reset({
        fullName: "",
        email: "",
        phone: "",
        state: "",
        courseInterested: "",
        intakeYear: "",
        consent: "false",
        university: university.id,
      });
      
      toast({
        title: "Application Submitted!",
        description: "Our admissions team will contact you within 24-48 hours.",
      });
      
      setTimeout(() => setShowSuccess(false), 5000);
    },
    onError: (error: any) => {
      toast({
        title: "Submission Failed",
        description: error.message || "Please try again or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: any) => {
    submitMutation.mutate(data);
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background" id="apply">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Column - Context */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Start Your Journey Today
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Take the first step towards a successful career. Fill out the form and our admissions team will guide you through the process.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className={`w-6 h-6 mt-0.5 flex-shrink-0 ${university.theme === 'blue' ? 'text-blue-600' : 'text-emerald-600'}`} />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Quick Response</h3>
                  <p className="text-muted-foreground">Get a callback within 24-48 hours</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className={`w-6 h-6 mt-0.5 flex-shrink-0 ${university.theme === 'blue' ? 'text-blue-600' : 'text-emerald-600'}`} />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Personalized Guidance</h3>
                  <p className="text-muted-foreground">Expert counseling for course selection</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className={`w-6 h-6 mt-0.5 flex-shrink-0 ${university.theme === 'blue' ? 'text-blue-600' : 'text-emerald-600'}`} />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Scholarship Information</h3>
                  <p className="text-muted-foreground">Learn about available financial aid</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Form */}
          <div className="bg-card p-8 md:p-10 rounded-md border border-card-border">
            {showSuccess && (
              <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-md flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <p className="text-emerald-800 font-medium">
                  Application submitted successfully!
                </p>
              </div>
            )}
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">Full Name *</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          placeholder="Enter your full name"
                          className="h-12"
                          data-testid="input-full-name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">Email Address *</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          type="email"
                          placeholder="your.email@example.com"
                          className="h-12"
                          data-testid="input-email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">Phone Number *</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          type="tel"
                          placeholder="10-digit mobile number"
                          maxLength={10}
                          className="h-12"
                          data-testid="input-phone"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="state"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">State *</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-12" data-testid="select-state">
                            <SelectValue placeholder="Select your state" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="max-h-[300px]">
                          {indianStates.map((state) => (
                            <SelectItem key={state} value={state}>
                              {state}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="courseInterested"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">Course Interested *</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-12" data-testid="select-course">
                            <SelectValue placeholder="Select a course" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {university.courses.map((course) => (
                            <SelectItem key={course.id} value={course.name}>
                              {course.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="intakeYear"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">Intake Year *</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-12" data-testid="select-intake-year">
                            <SelectValue placeholder="Select intake year" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {intakeYears.map((year) => (
                            <SelectItem key={year} value={year}>
                              {year}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="consent"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value === "true"}
                          onCheckedChange={(checked) => field.onChange(checked ? "true" : "false")}
                          data-testid="checkbox-consent"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm font-normal text-muted-foreground cursor-pointer">
                          I agree to receive communication and accept the{" "}
                          <span className="underline">privacy policy</span>
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                
                <Button
                  type="submit"
                  size="lg"
                  className={`w-full h-12 md:h-14 text-base md:text-lg font-semibold ${
                    university.theme === 'blue' 
                      ? 'bg-blue-600 hover:bg-blue-700' 
                      : 'bg-emerald-600 hover:bg-emerald-700'
                  } text-white`}
                  disabled={submitMutation.isPending}
                  data-testid="button-submit-application"
                >
                  {submitMutation.isPending ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Submit Application
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
