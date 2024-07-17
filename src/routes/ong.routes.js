import { Router } from "express";
import { createONG, getAllONGs } from "../controllers/ong.controller.js";

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

export {  ongRouter };
