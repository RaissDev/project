import { AssetController } from "../controllers/asset.controller";
import { Router } from "express";

const router = Router();

router.post("/create", AssetController.create);
router.get("/search/:id", AssetController.findOne);
router.get("/", AssetController.findAll);
router.delete("/softdelete/:id", AssetController.softDelete);
router.put("/update/:id", AssetController.update);
export default router;
