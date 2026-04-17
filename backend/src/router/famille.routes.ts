import { familleController } from "../Controller/famille.controller";
import { Router } from "express";

const router = Router()


router.post('/famille/create',familleController.create);
router.get('/famille/search/:id',familleController.findOne);
router.get('',familleController.findAll);
router.delete('/famille/delete/:id',familleController.delete);
router.delete('/famille/softdelete/:id',familleController.softDelete);
router.put('/famille/update/:id',familleController.update);
export default router;