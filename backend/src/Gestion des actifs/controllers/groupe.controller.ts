import { Request, Response } from "express";
import { GroupeService } from "../services/groupe.service"; 

const groupe = new GroupeService();

export const groupeController = {
  async create(req: Request, res: Response) {
    try {
      const result = await groupe.create(req.body);
      res.json(result);
    } catch (e) {
      res.status(400).json({ message: "error create groupe ", e });
    }
  },

  async findAll(req: Request, res: Response) {
    try {
      const data = await groupe.findAll();
      res.status(200).json(data);
    } catch (e) {
      res.status(400).json({ message: "error find all groupe ", e });
    }
  },

  async findAllDeleted(req: Request, res: Response) {
      try {
        const data = await groupe.findAllDeleted();
        return res.json(data);
      } catch (e) {
        res.json({ message: "error find all deleted groupe ", e });
      }
    },

  async findOne(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const data = await groupe.findOne(id);
      if(!data){
        return res.status(404).json({message : `this id : ${id} not found`})
      }
      res.json(data);
    } catch (e) {
      res.status(400).json({ message: "error find one groupe ", e });
    }
  },

  async update(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const result = await groupe.update(id, req.body);
      res.status(200).json(result);
    } catch (e) {
      res.status(400).json({ message: "error Update groupe ", e });
    }
  },

  async delete(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const user = req.body
      const result = await groupe.delete(id,user);
      if (!result) {
        res.status(404).json({ error: "groupe not found" });
      } else {
        res.json({ message: `groupe id : ${id} deleted by ${user} successfully` });
      }
      res.json(result);
    } catch (e) {
      res.status(400).json({ message: "error Update groupe ", e });
    }
  },

  async restore(req:Request,res:Response){
      try{
        const id =Number(req.params.id)
      const result =  await groupe.restore(id)
      res.status(200).json(result)
      }catch(e){
        res.json({ message: "error restore groupe " });
      }
      
    }
};
