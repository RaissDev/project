import { InspectionController } from "../controllers/inspection.controller";
import { Router } from "express";

const router = Router();

router.post("/create", InspectionController.create);
router.get("/search/:id", InspectionController.findOne);
router.get("/", InspectionController.findAll);
router.delete("/delete/:id", InspectionController.delete);
router.put("/update/:id", InspectionController.update);
export default router;
