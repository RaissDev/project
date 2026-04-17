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
            const data = Inspection.findAll();
            res.json(data);
        } catch (e) {
            res.status(400).json({ message: "error find all Inspection ", e });
        }
    },

    async findOne(req: Request, res: Response){
        try{
            const id = Number(req.params.id)
            const data = Inspection.findOne(id)
            res.json(data)
        }catch(e){
            res.status(400).json({ message: "error find one Inspection ", e });
        }
    },

    async update(req: Request, res: Response){
        try{
            const id = Number(req.params.id)
            const result = Inspection.update(id,req.body)
        }catch(e){
            res.status(400).json({ message: "error Update Inspection ", e });
        }
    },

    async delete(req: Request, res: Response){
        try{
            const id = Number(req.params.id)
            const result = Inspection.delete(id)
            res.json(result)
        }catch(e){
            res.status(400).json({ message: "error Update Inspection ", e });
        }
    },

    async softDelete(req: Request, res: Response){
        try{
            const id = Number(req.params.id)
            const result = Inspection.softDelete(id)
            res.json(result)
        }catch(e){
            res.status(400).json({ message: "error Update Inspection ", e });
        }
    }

};
