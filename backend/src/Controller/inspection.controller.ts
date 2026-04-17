import { Request, Response } from "express";
import { InspectionService } from "../Services/inspection.service"; 

const Inspection = new InspectionService();

export const InspectionController = {
    async create(req: Request, res: Response) {
        try {
            const result = await Inspection.create(req.body);
            res.json(result);
        } catch (e) {
            res.status(400).json({ message: "error create Inspection ", e });
        }
    },

    async findAll(req: Request, res: Response) {
        try {
            const data = await Inspection.findAll();
            res.json(data);
        } catch (e) {
            res.status(400).json({ message: "error find all Inspection ", e });
        }
    },

    async findOne(req: Request, res: Response){
        try{
            const id = Number(req.params.id)
            const data = await Inspection.findOne(id)
            res.json(data)
        }catch(e){
            res.status(400).json({ message: "error find one Inspection ", e });
        }
    },

    async update(req: Request, res: Response){
        try{
            const id = Number(req.params.id)
            const result = await Inspection.update(id,req.body)
            res.json(result)
        }catch(e){
            res.status(400).json({ message: "error Update Inspection ", e });
        }
    },

    async delete(req: Request, res: Response){
        try{
            const id = Number(req.params.id)
            const result = await Inspection.delete(id)
            res.json(result)
        }catch(e){
            res.status(400).json({ message: "error Update Inspection ", e });
        }
    },

    async softDelete(req: Request, res: Response){
        try{
            const id = Number(req.params.id)
            const result = await Inspection.softDelete(id)
            if ((await result).affected === 0) {
                res.status(404).json({ error: "Inspection not found" });
            } else {
                res.json({ message: "Inspection sofe deleted successfully" });
            }
            res.json(result)
        }catch(e){
            res.status(400).json({ message: "error Update Inspection ", e });
        }
    }

};
