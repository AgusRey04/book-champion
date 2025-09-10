import express from 'express'
import bookRoutes from './routes/books.router.js'
import { PORT } from './config.js';
import { sequelize } from "./db.js";

const app = express();

try {
    app.listen(PORT);
    app.use(bookRoutes);

    await sequelize.sync();

    console.log(`Server listening on port ${PORT}`);
} catch (error) {
    console.log(`Ocurrio un error en la inicialización: ${error.message}`)
}