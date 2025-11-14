import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertLeadSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // University Endpoints
  
  // GET /api/university/:id - Get specific university data
  app.get("/api/university/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const university = await storage.getUniversityById(id);
      
      if (!university) {
        return res.status(404).json({ error: "University not found" });
      }
      
      res.json(university);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // GET /api/universities - Get all universities (simple JSON)
  app.get("/api/universities", async (req, res) => {
    try {
      const universities = await storage.getAllUniversities();
      
      // Return simplified data
      const simplifiedUniversities = universities.map(u => ({
        id: u.id,
        name: u.name,
        shortName: u.shortName,
        tagline: u.tagline,
        theme: u.theme,
        stats: u.stats,
      }));
      
      res.json(simplifiedUniversities);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // GET /api/courses - Get all courses from all universities (nested JSON)
  app.get("/api/courses", async (req, res) => {
    try {
      const universities = await storage.getAllUniversities();
      
      // Return nested structure with university and their courses
      const coursesData = universities.map(u => ({
        universityId: u.id,
        universityName: u.name,
        theme: u.theme,
        courses: u.courses.map(c => ({
          id: c.id,
          name: c.name,
          duration: c.duration,
          description: c.description,
          fees: {
            total: c.totalFees,
            perSemester: c.perSemester,
          },
          eligibility: c.eligibility,
        })),
      }));
      
      res.json(coursesData);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // GET /api/placements - Get placement data (simple JSON)
  app.get("/api/placements", async (req, res) => {
    try {
      const universities = await storage.getAllUniversities();
      
      const placementsData = universities.map(u => ({
        university: u.shortName,
        placementRate: u.placements.placementPercentage,
        averagePackage: u.placements.averagePackage,
        highestPackage: u.placements.highestPackage,
        topRecruiters: u.placements.topRecruiters.slice(0, 6),
      }));
      
      res.json(placementsData);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Lead Form Endpoint
  
  // POST /api/leads - Submit lead form
  app.post("/api/leads", async (req, res) => {
    try {
      // Validate the request body
      const validatedData = insertLeadSchema.parse(req.body);
      
      // Store the lead locally
      const lead = await storage.createLead(validatedData);
      
      // Submit to Pipedream webhook if URL is provided
      const pipedreamUrl = process.env.PIPEDREAM_WEBHOOK_URL;
      
      if (pipedreamUrl) {
        try {
          const response = await fetch(pipedreamUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ...validatedData,
              submittedAt: lead.createdAt,
              source: "University Landing Page",
            }),
          });
          
          if (!response.ok) {
            console.error("Pipedream webhook failed:", await response.text());
          }
        } catch (webhookError) {
          // Log error but don't fail the request
          console.error("Failed to send to Pipedream:", webhookError);
        }
      }
      
      res.json({
        success: true,
        message: "Application submitted successfully",
        leadId: lead.id,
      });
    } catch (error: any) {
      if (error.name === "ZodError") {
        return res.status(400).json({
          error: "Validation failed",
          details: error.errors,
        });
      }
      
      res.status(500).json({ error: error.message });
    }
  });
  
  // GET /api/leads - Get all leads (for testing/admin purposes)
  app.get("/api/leads", async (req, res) => {
    try {
      const leads = await storage.getAllLeads();
      res.json(leads);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
