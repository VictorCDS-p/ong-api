import { Router } from "express";
import { createONG, getAllONGs, getONGById, updateONG, deleteONG } from "../controllers/ong.controller.js";

const ongRouter = Router();

ongRouter.post("/ong", (req, res) => {
    const { name, description, location, website, contactEmail } = req.body;
    const ong = createONG(name, description, location, website, contactEmail);
    res.status(201).json({ message: "ONG criada com sucesso", ong });
}
);

ongRouter.get("/ong", (req, res) => {
    const ongList = getAllONGs();
    res.status(200).json({ message: "Lista de ONGs recuperada com sucesso", ongList });
}
);

ongRouter.get("/ong/:id", (req, res) => {
    const { id } = req.params;
    const ong = getONGById(id);
    if (ong) {
        res.status(200).json({ message: "ONG encontrada com sucesso", ong });
    } else {
        res.status(404).json({ message: "ONG não encontrada" });
    }}
);

ongRouter.put("/ong/:id", (req, res) => {
    const { id } = req.params;
    const { name, description, location, website, contactEmail } = req.body;
    const ong = updateONG(id, name, description, location, website, contactEmail);
    if (ong) {
        res.status(200).json({ message: "ONG atualizada com sucesso", ong });
    } else {
        res.status(404).json({ message: "ONG não encontrada" });
    }}
);

ongRouter.delete("/ong/:id", (req, res) => {
    const { id } = req.params;
    const success = deleteONG(id);
    if (success) {
        res.status(200).json({ message: "ONG deletada com sucesso" });
    } else {
        res.status(404).json({ message: "ONG não encontrada" });
    }}
);


export { ongRouter };
