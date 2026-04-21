import { Request, Response } from "express";
import { AnomalieService } from "../services/anomalie.service";

const anomalie = new AnomalieService();

export const anomalieController = {
  async create(req: Request, res: Response) {
    try {
      const result = await anomalie.create(req.body);
      res.json(result);
    } catch (e) {
      res.status(400).json({ message: "error create anomalie ", e });
    }
  },

  async findAll(req: Request, res: Response) {
    try {
      const data = await anomalie.findAll();
      res.json(data);
    } catch (e) {
      res.status(400).json({ message: "error find all anomalie ", e });
    }
  },

  async findOne(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const data = await anomalie.findOne(id);
      res.json(data);
    } catch (e) {
      res.status(400).json({ message: "error find one anomalie ", e });
    }
  },

  async update(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const result = await anomalie.update(id, req.body);
      res.status(200).json(result)
    } catch (e) {
      res.status(400).json({ message: "error Update anomalie ", e });
    }
  },

  async delete(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const user = req.body
      const result = await anomalie.delete(id,user);
      if (result) {
        res.status(404).json({ error: "anomalie not found" });
      } else {
        res.json({ message: `anomalie id : ${id} deleted by ${user} successfully` });
      }
      res.json(result);
    } catch (e) {
      res.status(400).json({ message: "error Update anomalie ", e });
    }
  },
};
