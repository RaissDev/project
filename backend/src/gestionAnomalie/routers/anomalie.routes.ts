import { anomalieController } from "../controllers/anomalie.controller";
import { Router } from "express";

const router = Router();

router.post("/create", anomalieController.create);
router.get("/search/:id", anomalieController.findOne);
router.get("/", anomalieController.findAll);
router.delete("/softdelete/:id", anomalieController.softDelete);
router.put("/update/:id", anomalieController.update);
export default router;
