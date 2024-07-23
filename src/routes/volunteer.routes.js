import { Router } from "express";
import { createVolunteer, getAllVolunteers, getVolunteerById, updateVolunteer, deleteVolunteer } from "../controllers/volunteer.controller.js"


const volunteerRouter = Router();

volunteerRouter.post("/volunteer", (req, res) => {
    const { name, email, phone, interests } = req.body;
    const volunteer = createVolunteer(name, email, phone, interests);
    res.status(201).json({ message: "Voluntário criado com sucesso", volunteer });
}
);

volunteerRouter.get("/volunteer", (req, res) => {
    const volunteerList = getAllVolunteers();
    res.status(200).json({ message: "Lista de voluntários recuperada com sucesso", volunteerList });
}
);

volunteerRouter.get("/volunteer/:id", (req, res) => {
    const { id } = req.params;
    const volunteer = getVolunteerById(id);
    if (volunteer) {
        res.status(200).json({ message: "Voluntário encontrado com sucesso", volunteer });
    } else {
        res.status(404).json({ message: "Voluntário não encontrado" });
    }}
);

volunteerRouter.put("/volunteer/:id", (req, res) => {
    const { id } = req.params;
    const { name, email, phone, interests } = req.body;
    const volunteer = updateVolunteer(id, name, email, phone, interests);
    if (volunteer) {
        res.status(200).json({ message: "Voluntário atualizado com sucesso", volunteer });
    } else {
        res.status(404).json({ message: "Voluntário não encontrado" });
    }}
);

volunteerRouter.delete("/volunteer/:id", (req, res) => {
    const { id } = req.params;
    const success = deleteVolunteer(id);
    if (success) {
        res.status(200).json({ message: "Voluntário deletado com sucesso" });
    } else {
        res.status(404).json({ message: "Voluntário não encontrado" });
    }}
);


export { volunteerRouter };