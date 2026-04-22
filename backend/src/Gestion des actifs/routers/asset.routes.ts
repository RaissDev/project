import { ActifController } from "../controllers/actif.controller";
import { Router } from "express";

const router = Router();

router.post("/create", ActifController.create);
router.get("/search/:id", ActifController.findOne);
router.get("/", ActifController.findAll);
router.delete("/delete/:id", ActifController.delete);
router.put("/update/:id", ActifController.update);
router.put("/restore/:id", ActifController.restore);
router.get("/findAllDeleted", ActifController.findAllDeleted);
export default router;
