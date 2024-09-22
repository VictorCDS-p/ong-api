import { Router } from "express";
import { createOpportunity, getAllOpportunities, getOpportunityById, updateOpportunity, deleteOpportunity } from "../controllers/opportunity.controller.js";

const opportunityRouter = Router();

opportunityRouter.post("/opportunity", (req, res) => {
    const { title, description, location, ongId, startDate, endDate, requirements } = req.body;
    try {
        const opportunity = createOpportunity(title, description, location, ongId, startDate, endDate, requirements);
        res.status(201).json({ message: "Oportunidade criada com sucesso", opportunity });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

opportunityRouter.get("/opportunity", (req, res) => {
    const opportunities = getAllOpportunities();
    res.status(200).json({ message: "Lista de oportunidades recuperada com sucesso", opportunities });
});

opportunityRouter.get("/opportunity/:id", (req, res) => {
    const { id } = req.params;
    const opportunity = getOpportunityById(id);
    if (opportunity) {
        res.status(200).json({ message: "Oportunidade encontrada com sucesso", opportunity });
    } else {
        res.status(404).json({ message: "Oportunidade não encontrada" });
    }
});

opportunityRouter.put("/opportunity/:id", (req, res) => {
    const { id } = req.params;
    const { title, description, location, ongId, startDate, endDate, requirements } = req.body;
    const opportunity = updateOpportunity(id, title, description, location, ongId, startDate, endDate, requirements);
    if (opportunity) {
        res.status(200).json({ message: "Oportunidade atualizada com sucesso", opportunity });
    } else {
        res.status(404).json({ message: "Oportunidade não encontrada" });
    }
});

opportunityRouter.delete("/opportunity/:id", (req, res) => {
    const { id } = req.params;
    const success = deleteOpportunity(id);
    if (success) {
        res.status(200).json({ message: "Oportunidade deletada com sucesso" });
    } else {
        res.status(404).json({ message: "Oportunidade não encontrada" });
    }
});

export { opportunityRouter };
