

import { Router } from "express";

import { findBooks, createBook, findBook, updateBook, deleteBook } from "../services/book.services.js";

const bookRoutes = Router();

// GET all books
bookRoutes.get("/books", findBooks);

// GET book by id
bookRoutes.get("/books/:id", findBook);


// CREATE book
bookRoutes.post("/books", createBook);

// UPDATE book
bookRoutes.put("/books/:id", updateBook);

// DELETE book
bookRoutes.delete("/books/:id", deleteBook);


export default bookRoutes;
