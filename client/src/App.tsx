import { Switch, Route, Link } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import UniversityA from "@/pages/university-a";
import UniversityB from "@/pages/university-b";

function Router() {
  return (
    <Switch>
      <Route path="/" component={LandingSelector} />
      <Route path="/university-a" component={UniversityA} />
      <Route path="/university-b" component={UniversityB} />
      <Route component={NotFound} />
    </Switch>
  );
}

function LandingSelector() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground">
            Choose Your University
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Explore top private universities in India
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <Link href="/university-a" data-testid="link-university-a">
            <div className="group p-8 bg-card rounded-md border border-card-border hover-elevate active-elevate-2 cursor-pointer transition-all" data-testid="card-university-a">
              <div className="mb-4">
                <div className="w-16 h-16 rounded-md bg-blue-100 flex items-center justify-center mb-4">
                  <span className="text-3xl font-bold text-blue-600">A</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2" data-testid="text-university-a-name">
                  Apex Institute of Technology
                </h2>
                <p className="text-muted-foreground" data-testid="text-university-a-tagline">
                  Premier engineering and technology university
                </p>
              </div>
              <div className="flex items-center text-blue-600 font-semibold">
                Explore Programs
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
          
          <Link href="/university-b" data-testid="link-university-b">
            <div className="group p-8 bg-card rounded-md border border-card-border hover-elevate active-elevate-2 cursor-pointer transition-all" data-testid="card-university-b">
              <div className="mb-4">
                <div className="w-16 h-16 rounded-md bg-emerald-100 flex items-center justify-center mb-4">
                  <span className="text-3xl font-bold text-emerald-600">B</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2" data-testid="text-university-b-name">
                  BrightPath University
                </h2>
                <p className="text-muted-foreground" data-testid="text-university-b-tagline">
                  Excellence in business and liberal arts education
                </p>
              </div>
              <div className="flex items-center text-emerald-600 font-semibold">
                Explore Programs
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
