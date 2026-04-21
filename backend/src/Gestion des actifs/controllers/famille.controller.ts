import { Request, Response } from "express";
import { FamilleServices } from "../services/famille.service";

const famille = new FamilleServices();

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
      if(!data){
        return res.status(404).json({message : `this id : ${id} not found`})
      }
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

  async delete(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const user = req.body
      const result = await famille.delete(id,user);
      if (!result) {
        res.status(404).json({ error: "famille not found" });
      } else {
        res.json({ message: "famille sofe deleted successfully" });
      }
      res.json(result);
    } catch (e) {
      res.status(400).json({ message: "error Update famille ", e });
    }
  },
};
