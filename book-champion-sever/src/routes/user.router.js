import { Router } from "express";
import { registerUser, loginUser } from "../services/user.services.js";

const userRoutes = Router();

// Registro de usuario
userRoutes.post("/register", registerUser);
userRoutes.post("/login", loginUser);

export default userRoutes;
