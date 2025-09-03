import { Router } from "express";

const bookRoutes = Router();
bookRoutes.get("/books", (req, res) => {
    res.send("Obteniendo todos los libros");
});

bookRoutes.get("/books/:id", (req, res) => {
    const { id } = req.params;
    res.send(`Obteniendo el libro con ID: ${id}`);
});
bookRoutes.post("/books", (req, res) => {
    res.send("Creando un nuevo libro");
});

bookRoutes.put("/books/:id", (req, res) => {
    const { id } = req.params;
    res.send(`Actualizando el libro con ID: ${id}`);
});

bookRoutes.delete("/books/:id", (req, res) => {
    const { id } = req.params;
    res.send(`Eliminando el libro con ID: ${id}`);
});
export default bookRoutes;