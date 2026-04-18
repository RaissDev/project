import { Request, Response } from "express";
import { familleServices } from "../services/famille.service";

const famille = new familleServices();

export const familleController = {
  async create(req: Request, res: Response) {
    try {
      const result = await famille.create(req.body);
      res.json(result);
    } catch (e) {
      res.status(400).json({ message: "error create famille ", e });
    }
  },

  async findAll(req: Request, res: Response) {
    try {
      const data = await famille.findAll();
      res.json(data);
    } catch (e) {
      res.status(400).json({ message: "error find all famille ", e });
    }
  },

  async findOne(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const data = await famille.findOne(id);
      res.json(data);
    } catch (e) {
      res.status(400).json({ message: "error find one famille ", e });
    }
  },

  async update(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const result = await famille.update(id, req.body);
      res.status(200).json(result);
    } catch (e) {
      res.status(400).json({ message: "error Update famille ", e });
    }
  },

  async softDelete(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const result = await famille.Delete(id);
      if ((await result).affected === 0) {
        res.status(404).json({ error: "Inspection not found" });
      } else {
        res.json({ message: "Inspection sofe deleted successfully" });
      }
      res.json(result);
    } catch (e) {
      res.status(400).json({ message: "error Update famille ", e });
    }
  },
};
