import express from "express";
import { PORT } from "./config.js";

import bookRoutes from "../routes/books.router.js"
const app = express();

app.listen(PORT);
app.use(bookRoutes);

console.log(`Server is running on port ${PORT}`);


