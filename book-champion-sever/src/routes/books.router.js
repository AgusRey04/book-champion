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

bookRoutes.post("/books", async (req, res) => {
    const { title, author, rating, pageCount, summary, imageUrl, available } = req.body;
    const newBook = await Book.create({ title, author, rating, pageCount, summary, imageUrl, available });
    res.status(201).json(newBook);
});


bookRoutes.put("/books/:id", async (req, res) => {
    const { id } = req.params;
    const { title, author, rating, pageCount, summary, imageUrl, available } = req.body;
    try {
        const book = await Book.findByPk(id);
        if (!book) return res.status(404).json({ message: "Libro no encontrado" });

        await book.update({ title, author, rating, pageCount, summary, imageUrl, available });
        res.json(book);
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el libro" });
    }
});

bookRoutes.delete("/books/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const book = await Book.findByPk(id);
        if (!book) return res.status(404).json({ message: "Libro no encontrado" });

        await book.destroy();
        res.json({ message: `Libro con id ${id} eliminado correctamente` });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar el libro" });
    }


});
export default bookRoutes;