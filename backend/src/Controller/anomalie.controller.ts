import { Request, Response } from "express";
import { anomalieService } from "../Services/anomalie.service";

const anomalie = new anomalieService();

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
            const data = anomalie.findAll();
            res.json(data);
        } catch (e) {
            res.status(400).json({ message: "error find all anomalie ", e });
        }
    },

    async findOne(req: Request, res: Response){
        try{
            const id = Number(req.params.id)
            const data = anomalie.findOne(id)
            res.json(data)
        }catch(e){
            res.status(400).json({ message: "error find one anomalie ", e });
        }
    },

    async update(req: Request, res: Response){
        try{
            const id = Number(req.params.id)
            const result = anomalie.update(id,req.body)
        }catch(e){
            res.status(400).json({ message: "error Update anomalie ", e });
        }
    },

    async delete(req: Request, res: Response){
        try{
            const id = Number(req.params.id)
            const result = anomalie.delete(id)
            res.json(result)
        }catch(e){
            res.status(400).json({ message: "error Update anomalie ", e });
        }
    },

    async softDelete(req: Request, res: Response){
        try{
            const id = Number(req.params.id)
            const result = anomalie.softDelete(id)
            res.json(result)
        }catch(e){
            res.status(400).json({ message: "error Update anomalie ", e });
        }
    }

};
