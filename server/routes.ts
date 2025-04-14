import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMessageSchema } from "@shared/schema";
import * as path from "path";
import * as fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertMessageSchema.parse(req.body);
      await storage.createMessage(validatedData);
      
      res.status(200).json({ 
        success: true, 
        message: "Message received successfully" 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Invalid form data" 
      });
    }
  });

  // Resume download
  app.get("/api/download-resume", (req, res) => {
    const resumePath = path.resolve(
      process.cwd(),
      "attached_assets",
      "Mrenank_Resume_April_2025 (1).pdf"
    );

    if (fs.existsSync(resumePath)) {
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader(
        "Content-Disposition",
        "attachment; filename=Mrenank_Rastogi_Resume.pdf"
      );
      fs.createReadStream(resumePath).pipe(res);
    } else {
      res.status(404).json({ 
        success: false, 
        message: "Resume file not found" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
