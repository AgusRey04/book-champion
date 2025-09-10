import { Router } from "express";
import { Book } from "../models/Book.js";
const bookRoutes = Router();
bookRoutes.get("/books", async (req, res) => {
    const books = await Book.findAll();
    res.json(books);
});

bookRoutes.get("/books/:id", async (req, res) => {
    const { id } = req.params;
    const book = await Book.findByPk(id);
    res.send(book);
});

bookRoutes.post("/books", (req, res) => {
    res.send("Creando libro...");
});

bookRoutes.delete("/books/:id", (req, res) => {
    const { id } = req.params;
    res.send(`Eliminando libro con id: ${id}`);
});
export default bookRoutes;