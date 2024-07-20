import { Router } from "express";
import { createVolunteer, getAllVolunteers, getVolunteerById, updateVolunteer, deleteVolunteer } from "../controllers/volunteer.controller.js"


const volunteerRouter = Router();

volunteerRouter.post("/volunteer", (req, res) => {
    const { name, email, phone, interests } = req.body;
    const volunteer = createVolunteer(name, email, phone, interests);
    res.json({ volunteer });
});

volunteerRouter.get("/volunteer", (req, res) => {
    const volunteerList = getAllVolunteers();
    res.json({ volunteerList });
});

volunteerRouter.get("/volunteer/:id", (req, res) => {
    const { id } = req.params;
    const volunteer = getVolunteerById(id);
    res.json({ volunteer });
});

volunteerRouter.put("/volunteer/:id", (req, res) => {
    const { id } = req.params;
    const { name, email, phone, interests } = req.body;
    const volunteer = updateVolunteer(id, name, email, phone, interests);
    res.json({ volunteer });
});

volunteerRouter.delete("/volunteer/:id", (req, res) => {
    const { id } = req.params;
    const success = deleteVolunteer(id);
    res.json({ success });
});


export { volunteerRouter };