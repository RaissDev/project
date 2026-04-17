import { usersController } from "../Controller/user.controller"; 
import { Router } from "express";

const router = Router()


router.post('/users/create',usersController.create);
router.get('/users/search/:id',usersController.findOne);
router.get('',usersController.findAll);
router.delete('/users/delete/:id',usersController.delete);
router.delete('/users/softdelete/:id',usersController.softDelete);
router.put('/users/update/:id',usersController.update);
export default router;