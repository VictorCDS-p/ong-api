import { Router } from "express";
import { createONG, getAllONGs, getONGById, updateONG, deleteONG } from "../controllers/ong.controller.js";

const ongRouter = Router();

ongRouter.post("/ong", (req, res) => {
    const { name, description, location, website, contactEmail } = req.body;
    const ong = createONG(name, description, location, website, contactEmail);
    res.json({ ong });
});

ongRouter.get("/ong", (req, res) => {
    const ongList = getAllONGs();
    res.json({ ongList });
});

ongRouter.get("/ong/:id", (req, res) => {
    const { id } = req.params;
    const ong = getONGById(id);
    res.json({ ong })
})

ongRouter.put("/ong/:id", (req, res) => {
    const { id } = req.params;
    const { name, description, location, website, contactEmail } = req.body;
    const ong = updateONG(id, name, description, location, website, contactEmail);
    res.json({ ong });
})

ongRouter.delete("/ong/:id", (req, res) => {
    const { id } = req.params;
    const success = deleteONG(id);
    res.json({ success });
});


export { ongRouter };
