import { Request, Response } from "express";
import { InspectionService } from "../services/inspection.service";

const inspection = new InspectionService();

export const InspectionController = {

  async changeStatus(req:Request , res : Response){
    try{
      const id = Number(req.params.id);
      const {newStatus} = req.body
      const user = req.body
      const result = await inspection.changeStatus(id,newStatus ,user )
      res.status(200).json(result)
    }catch(e){
      console.error({message : `error form change status inspection `},(e))
    }
  },

  async create(req: Request, res: Response) {
    try {
      const result = await inspection.create(req.body);
      res.json(result);
    } catch (e) {
      res.status(400).json({ message: "error create Inspection ", e });
    }
  },

  async findAll(req: Request, res: Response) {
    try {
      const data = await inspection.findAll();
      res.json(data);
    } catch (e) {
      res.status(400).json({ message: "error find all Inspection ", e });
    }
  },

  async findOne(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const data = await inspection.findOne(id);
      res.json(data);
    } catch (e) {
      res.status(400).json({ message: "error find one Inspection ", e });
    }
  },

  async update(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const result = await inspection.update(id, req.body);
      res.json(result);
    } catch (e) {
      res.status(400).json({ message: "error Update Inspection ", e });
    }
  },

  async delete(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const user = req.body
      const result = await inspection.delete(id,user);
      if (result) {
        res.status(404).json({ error: "Inspection not found" });
      } else {
        res.json({ message: "Inspection id : ${id} deleted by ${user} successfully" });
      }
      res.json(result);
    } catch (e) {
      res.status(400).json({ message: "error Update Inspection ", e });
    }
  },
};
