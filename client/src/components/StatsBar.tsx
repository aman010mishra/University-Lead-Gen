import { UniversityStats } from "@shared/schema";
import { TrendingUp, Users, Award, IndianRupee } from "lucide-react";

interface StatsBarProps {
  stats: UniversityStats;
  theme: "blue" | "green";
}

export default function StatsBar({ stats, theme }: StatsBarProps) {
  const themeColors = {
    blue: "text-blue-600",
    green: "text-emerald-600",
  };

  const themeIconBg = {
    blue: "bg-blue-100",
    green: "bg-emerald-100",
  };

  const statsData = [
    {
      icon: TrendingUp,
      value: stats.placementRate,
      label: "Placement Rate",
    },
    {
      icon: Users,
      value: stats.recruiters,
      label: "Top Recruiters",
    },
    {
      icon: Award,
      value: stats.accreditation,
      label: "Accreditation",
    },
    {
      icon: IndianRupee,
      value: stats.avgPackage,
      label: "Average Package",
    },
  ];

  return (
    <section className="py-8 md:py-12 border-b bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-3"
              data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full ${themeIconBg[theme]} flex items-center justify-center`}>
                <stat.icon className={`w-7 h-7 md:w-8 md:h-8 ${themeColors[theme]}`} />
              </div>
              <div>
                <div className={`text-2xl md:text-3xl lg:text-4xl font-bold ${themeColors[theme]} mb-1`}>
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
