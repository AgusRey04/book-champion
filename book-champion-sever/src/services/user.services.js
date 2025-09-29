import bcrypt from "bcrypt";
import { User } from "../models/user.js";
import jwt from "jsonwebtoken"
export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (user) {
        return res.status(400).json({ message: "El usuario ya existe" });
    }
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await User.create({ name, email, password: hashedPassword });
    res.status(201).json(newUser.id);
};

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
        return res.status(401).json({ message: "Correo o contraseña incorrectos" });
    }
    const comparar = await bcrypt.compare(password, user.password);

    if (!comparar) {
        return res.status(401).json({ message: "Correo o contraseña incorrectos" });
    }
    const secretKey = "programacion-2025"
    const token = jwt.sign({ email }, secretKey, { expiresIn: '1h' });
    return res.json(token);
};
