import { Request, Response } from "express";
import { ActifService } from "../services/actif.service";

const actif = new ActifService();

export const ActifController = {
  async create(req: Request, res: Response) {
    try {
      const result = await actif.create(req.body);
      res.json(result);
    } catch (e) {
      res.status(400).json({ message: "error create actif ", e });
    }
  },

  async findAll(req: Request, res: Response) {
    try {
      const data = await actif.findAll();
      res.json(data);
    } catch (e) {
      res.status(400).json({ message: "error find all actif ", e });
    }
  },

  async findOne(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const data = await actif.findOne(id);
      if(!data){
        return res.status(404).json({message : `this id : ${id} not found`})
      }
      res.json(data);
    } catch (e) {
      res.status(400).json({ message: "error find one actif ", e });
    }
  },

  async update(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const result = await actif.update(id, req.body)
      res.status(200).json(result)
    } catch (e) {
      res.status(400).json({ message: "error Update actif ", e });
    }
  
  },

  async delete(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const user = req.body
      const result = await actif.delete(id,user);
      if (!result) {
        res.status(404).json({ message : "actif not found" });
      }
      res.json(result);
    } catch (e) {
      res.status(400).json({ message: "error delete actif " });
    }
  },
};
