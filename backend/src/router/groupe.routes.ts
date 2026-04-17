import { groupeController } from "../Controller/groupe.controller";
import { Router } from "express";

const router = Router()


router.post('/groupe/create',groupeController.create);
router.get('/groupe/search/:id',groupeController.findOne);
router.get('',groupeController.findAll);
router.delete('/groupe/delete/:id',groupeController.delete);
router.delete('/groupe/softdelete/:id',groupeController.softDelete);
router.put('/groupe/update/:id',groupeController.update);
export default router;