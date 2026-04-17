import { Request, Response } from "express";
import { AssetService } from "../Services/actif.service";

const asset = new AssetService();

export const AssetController = {
    async create(req: Request, res: Response) {
        try {
            const result = await asset.create(req.body);
            res.json(result);
        } catch (e) {
            res.status(400).json({ message: "error create asset ", e });
        }
    },

    async findAll(req: Request, res: Response) {
        try {
            const data = await asset.findAll();
            res.json(data);
        } catch (e) {
            res.status(400).json({ message: "error find all asset ", e });
        }
    },

    async findOne(req: Request, res: Response){
        try{
            const id = Number(req.params.id)
            const data = await asset.findOne(id)
            res.json(data)
        }catch(e){
            res.status(400).json({ message: "error find one asset ", e });
        }
    },

    async update(req: Request, res: Response){
        try{
            const id = Number(req.params.id)
            const result = await asset.update(id,req.body)
        }catch(e){
            res.status(400).json({ message: "error Update asset ", e });
        }
    },

    async delete(req: Request, res: Response){
        try{
            const id = Number(req.params.id)
            const result = await asset.delete(id)
            res.json(result)
        }catch(e){
            res.status(400).json({ message: "error Update asset ", e });
        }
    },

    async softDelete(req: Request, res: Response){
        try{
            const id = Number(req.params.id)
            const result = await asset.softDelete(id)
            if ((await result).affected === 0) {
                res.status(404).json({ error: "Inspection not found" });
            } else {
                res.json({ message: "Inspection sofe deleted successfully" });
            }
            res.json(result)
        }catch(e){
            res.status(400).json({ message: "error Update asset ", e });
        }
    }

};
