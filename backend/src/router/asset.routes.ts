import { AssetController } from "../Controller/actif.controller";
import { Router } from "express";

const router = Router()


router.post('/asset/create',AssetController.create);
router.get('/asset/search/:id',AssetController.findOne);
router.get('',AssetController.findAll);
router.delete('/asset/delete/:id',AssetController.delete);
router.delete('/asset/softdelete/:id',AssetController.softDelete);
router.put('/asset/update/:id',AssetController.update);
export default router;