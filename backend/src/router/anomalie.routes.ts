import { anomalieController } from "../Controller/anomalie.controller"; 
import { Router } from "express";

const router = Router()


router.post('/anomalie/create',anomalieController.create);
router.get('/anomalie/search/:id',anomalieController.findOne);
router.get('',anomalieController.findAll);
router.delete('/anomalie/delete/:id',anomalieController.delete);
router.delete('/anomalie/softdelete/:id',anomalieController.softDelete);
router.put('/anomalie/update/:id',anomalieController.update);
export default router;