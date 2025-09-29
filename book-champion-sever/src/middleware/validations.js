import jwt from "jsonwebtoken";
export const verifyToken = (req, res, next) => {
    const header = req.header("Authorization") || "";
    const token = header.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "No posee autorización requerida" });
    }

    try {
        const payload = jwt.verify(token, 'programacion-2025');
        console.log(payload);
        next();
    } catch (error) {
        return res.status(403).json({ message: "No posee permisos correctos" });
    }
}

export const validateString = (str, minLength, maxLength) => {
    if (minLength && str.length < minLength)
        return false;
    else if (maxLength && str.length > maxLength)
        return false;

    return true;
}



export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export const validatePassword = (password, minLength, maxLength, needsUppercase, needsNumber) => {
    if (minLength && password.length < minLength)
        return false;

    else if (maxLength && password.length > maxLength)
        return false;

    else if (needsUppercase && !/[A-Z]/.test(password))
        return false;

    else if (needsNumber && !/\d/.test(password))
        return false;


    return true;
}