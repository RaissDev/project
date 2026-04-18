import { usersController } from "../Controller/user.controller";
import { Router } from "express";

const router = Router();

router.post("/create", usersController.create);
router.get("/search/:id", usersController.findOne);
router.get("/", usersController.findAll);
router.delete("/softdelete/:id", usersController.softDelete);
router.put("/update/:id", usersController.update);
export default router;
