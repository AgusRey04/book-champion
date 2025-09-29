
import { Router } from "express";
import { findBooks, createBook, findBook, updateBook, deleteBook } from "../services/book.services.js";
import { verifyToken } from "../middleware/validations.js"

const bookRoutes = Router();

// GET all books
bookRoutes.get("/books", verifyToken, findBooks);

// GET book by id
bookRoutes.get("/books/:id", verifyToken, findBook);


// CREATE book
bookRoutes.post("/books", verifyToken, createBook);

// UPDATE book
bookRoutes.put("/books/:id", verifyToken, updateBook);

// DELETE book
bookRoutes.delete("/books/:id", verifyToken, deleteBook);


export default bookRoutes;
