import { Router } from "express";
import { authController } from "./auth.controller";
import { validateSignup, validateLogin } from "../../middleware/validation";
const router = Router();

router.post('/signup', validateSignup, authController.signUp)
router.post('/signin', validateLogin, authController.loginUser)



export const authRoutes = router


