import { familleController } from "../controllers/famille.controller";
import { Router } from "express";

const router = Router();

router.post("/create", familleController.create);
router.get("/search/:id", familleController.findOne);
router.get("/", familleController.findAll);
router.delete("/softdelete/:id", familleController.delete);
router.put("/update/:id", familleController.update);
export default router;
