import { logsInspectionServices } from "../services/inspectionLogs.service";
import { Request, Response } from "express";

const logsService = new logsInspectionServices();

export const logsInspectionController = {
  
  async findAll(req: Request, res: Response) {
    try {
      const result = await logsService.findAll();
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ message: "Error find all logs inspection" });
    }
  },
};
