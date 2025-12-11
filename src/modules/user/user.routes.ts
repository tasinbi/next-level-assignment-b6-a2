import { userController } from "./user.controller";
import { auth } from "../../middleware/auth";

const express = require("express");
const router = express.Router();

router.get('/', auth("admin"), userController.getAllUsers)
router.put('/:userId', auth("admin", "customer"), userController.AdminorOwnProfile)
router.delete('/:userId', auth("admin"), userController.deleteById)


export const userRoutes = router;