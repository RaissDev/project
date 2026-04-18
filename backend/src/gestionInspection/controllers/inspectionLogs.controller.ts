import { logsInspectionServices } from "../services/inspectionLogs.service";
import { Request, Response } from "express";

const logsService = new logsInspectionServices();

export const logsInspectionController = {
  async changeStatus(req: Request, res: Response) {
    const { id } = req.params;
    const { newStatus, user } = req.body;
    try {
      await logsService.changeStatus(Number(id), newStatus, user);
      res.status(200).json({ message: "Status changed successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error changing status" });
    }
  },

  async findAll(req: Request, res: Response) {
    try {
      const result = await logsService.findAll();
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ message: "Error find all logs inspection" });
    }
  },
};
