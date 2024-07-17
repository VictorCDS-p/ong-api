import { Router } from "express";
import { createVonluteer, getAllVolunteers } from "../controllers/volunteer.controller.js"


const volunteerRouter = Router();

volunteerRouter.post("/volunteer", (req, res) => {
    const { name, email, phone, interests } = req.body;
    const volunteer = createVonluteer(name, email, phone, interests);
    res.json({ volunteer });
});

volunteerRouter.get("/volunteers", (req, res) => {
    const volunteerList = getAllVolunteers();
    res.json({ volunteerList });
});

export { volunteerRouter };