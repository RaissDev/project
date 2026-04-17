import { Request, Response } from "express";
import { usersService } from "../Services/user.service"; 

const users = new usersService();

export const usersController = {
    async create(req: Request, res: Response) {
        try {
            const result = await users.create(req.body);
            res.json(result);
        } catch (e) {
            res.status(400).json({ message: "error create users ", e });
        }
    },

    async findAll(req: Request, res: Response) {
        try {
            const data = await users.findAll();
            res.json(data);
        } catch (e) {
            res.status(400).json({ message: "error find all users ", e });
        }
    },

    async findOne(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)
            const data = await users.findOne(id)
            res.json(data)
        } catch (e) {
            res.status(400).json({ message: "error find one users ", e });
        }
    },

    async update(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)
            const result = await users.update(id, req.body)
            res.json(result)
        } catch (e) {
            res.status(400).json({ message: "error Update users ", e });
        }
    },

    async delete(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)
            const result = await users.delete(id)
            res.json(result)
        } catch (e) {
            res.status(400).json({ message: "error Update users ", e });
        }
    },

    async softDelete(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)
            const result = await users.softDelete(id)
            if ((await result).affected === 0) {
                res.status(404).json({ error: "Inspection not found" });
            } else {
                res.json({ message: "Inspection deleted successfully" });
            }
            res.json(result)
        } catch (e) {
            res.status(400).json({ message: "error Update users ", e });
        }
    }

};
