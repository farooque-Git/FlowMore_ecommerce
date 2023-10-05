import express from "express";
import { 
    registerController, 
    loginController,
    testContoller
 } from "../controllers/authController.js";
import { isAdmin, requiresSignIn } from "../middlewares/authMiddleware.js";

// router object
const router = express.Router()

// routing
// REGISTER || METHOD POST
router.post("/register", registerController)

// LOGIN || POST
router.post("/login", loginController)

// test route
router.get("/test", requiresSignIn,isAdmin, testContoller)

export default router;