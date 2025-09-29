import express from 'express'
import bookRoutes from './routes/books.router.js'
import userRoutes from './routes/user.router.js'
import { PORT } from './config.js';
import { sequelize } from "./db.js";
import "./models/Book.js";
import "./models/user.js"
const app = express();

try {
    app.use(express.json());

    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "*");
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
        next();
    });
    app.listen(PORT);
    app.use(bookRoutes);
    app.use(userRoutes);

    await sequelize.sync();
    await sequelize.authenticate();

    console.log(`Server listening on port ${PORT}`);
} catch (error) {
    console.log(`Ocurrio un error en la inicialización: ${error.message}`)
}