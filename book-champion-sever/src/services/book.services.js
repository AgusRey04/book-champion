import { Book } from "../models/Book.js";

export const findBooks = async (req, res) => {

    const books = await Book.findAll();
    res.json(books);

};

export const findBook = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findByPk(id);
        if (!book) return res.status(404).json({ message: "Libro no encontrado" });
        res.json(book);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el libro" });
    }
};

export const createBook = async (req, res) => {
    try {
        const { title, author, rating, pageCount, summary, imageUrl, available } = req.body;
        if (!title || !author) {
            return res.status(400).json({ message: "Título y autor son obligatorios" });
        }
        const newBook = await Book.create({ title, author, rating, pageCount, summary, imageUrl, available });
        res.status(201).json(newBook);
    } catch (error) {
        res.status(500).json({ message: "Error al crear el libro" });
    }
};
export const updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, author, rating, pageCount, summary, imageUrl, available } = req.body;
        const book = await Book.findByPk(id);
        if (!book) return res.status(404).json({ message: "Libro no encontrado" });
        await book.update({ title, author, rating, pageCount, summary, imageUrl, available });
        res.json(book);
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el libro" });
    }
};

export const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findByPk(id);
        if (!book) return res.status(404).json({ message: "Libro no encontrado" });
        await book.destroy();
        res.json({ message: "Libro eliminado" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar el libro" });
    }
};