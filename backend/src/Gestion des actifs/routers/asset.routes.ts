import { ActifController } from "../controllers/actif.controller";
import { Router } from "express";

const router = Router();

router.post("/create", ActifController.create);
router.get("/search/:id", ActifController.findOne);
router.get("/", ActifController.findAll);
router.delete("/delete/:id", ActifController.delete);
router.put("/update/:id", ActifController.update);
export default router;
