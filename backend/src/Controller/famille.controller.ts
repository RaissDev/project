import { Request, Response } from "express";
import { familleServices } from "../Services/famille.service"; 

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
            const data = famille.findAll();
            res.json(data);
        } catch (e) {
            res.status(400).json({ message: "error find all famille ", e });
        }
    },

    async findOne(req: Request, res: Response){
        try{
            const id = Number(req.params.id)
            const data = famille.findOne(id)
            res.json(data)
        }catch(e){
            res.status(400).json({ message: "error find one famille ", e });
        }
    },

    async update(req: Request, res: Response){
        try{
            const id = Number(req.params.id)
            const result = famille.update(id,req.body)
        }catch(e){
            res.status(400).json({ message: "error Update famille ", e });
        }
    },

    async delete(req: Request, res: Response){
        try{
            const id = Number(req.params.id)
            const result = famille.delete(id)
            res.json(result)
        }catch(e){
            res.status(400).json({ message: "error Update famille ", e });
        }
    },

    async softDelete(req: Request, res: Response){
        try{
            const id = Number(req.params.id)
            const result = famille.softDelete(id)
            res.json(result)
        }catch(e){
            res.status(400).json({ message: "error Update famille ", e });
        }
    }

};
