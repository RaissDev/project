import { groupeController } from "../controllers/groupe.controller";
import { Router } from "express";

const router = Router();

router.post("/create", groupeController.create);
router.get("/search/:id", groupeController.findOne);
router.get("/", groupeController.findAll);
router.delete("/softdelete/:id", groupeController.delete);
router.put("/update/:id", groupeController.update);
router.put("/restore/:id", groupeController.restore);
router.get("/findAllDeleted", groupeController.findAllDeleted);
export default router;
