import { InspectionController } from "../Controller/inspection.controller";
import { Router } from "express";

const router = Router()


router.post('/Inspection/create',InspectionController.create);
router.get('/Inspection/search/:id',InspectionController.findOne);
router.get('',InspectionController.findAll);
router.delete('/Inspection/delete/:id',InspectionController.delete);
router.delete('/Inspection/softdelete/:id',InspectionController.softDelete);
router.put('/Inspection/update/:id',InspectionController.update);
export default router;