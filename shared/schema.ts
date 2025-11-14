import { pgTable, text, varchar, integer, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Lead Form Schema
export const leads = pgTable("leads", {
  id: varchar("id").primaryKey(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  state: text("state").notNull(),
  courseInterested: text("course_interested").notNull(),
  intakeYear: text("intake_year").notNull(),
  consent: text("consent").notNull(),
  university: text("university").notNull(),
  createdAt: text("created_at").notNull(),
});

export const insertLeadSchema = createInsertSchema(leads).omit({ id: true, createdAt: true }).extend({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),
  state: z.string().min(1, "Please select a state"),
  courseInterested: z.string().min(1, "Please select a course"),
  intakeYear: z.string().min(1, "Please select an intake year"),
  consent: z.literal("true", { errorMap: () => ({ message: "You must agree to the terms" }) }),
  university: z.string(),
});

export type InsertLead = z.infer<typeof insertLeadSchema>;
export type Lead = typeof leads.$inferSelect;

// University Data Types
export interface University {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  heroImage: string;
  logo: string;
  theme: "blue" | "green";
  stats: UniversityStats;
  courses: Course[];
  placements: PlacementData;
  facilities: Facility[];
  contact: ContactInfo;
  accreditations: string[];
}

export interface UniversityStats {
  placementRate: string;
  recruiters: string;
  accreditation: string;
  avgPackage: string;
}

export interface Course {
  id: string;
  name: string;
  duration: string;
  description: string;
  icon: string;
  totalFees: string;
  perSemester: string;
  eligibility: string;
}

export interface PlacementData {
  highlights: string[];
  topRecruiters: string[];
  averagePackage: string;
  highestPackage: string;
  placementPercentage: string;
}

export interface Facility {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  city: string;
  state: string;
}

// Indian States List
export const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Puducherry",
  "Chandigarh",
] as const;

export const intakeYears = ["2024", "2025", "2026"] as const;
