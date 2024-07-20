import { Router } from "express";
import { createOpportunity, getAllOpportunities, getOpportunityById, updateOpportunity, deleteOpportunity } from "../controllers/opportunity.controller.js";

const opportunityRouter = Router();

opportunityRouter.post("/opportunity", (req, res) => {
    const { title, description, location, ongId, startDate, endDate, requirements } = req.body;
    const opportunity = createOpportunity(title, description, location, ongId, startDate, endDate, requirements);
    res.json({ opportunity });
});

opportunityRouter.get("/opportunity", (req, res) => {
    const opportunityList = getAllOpportunities();
    res.json({ opportunityList });
});

opportunityRouter.get("/opportunity/:id", (req, res) => {
    const { id } = req.params;
    const opportunity = getOpportunityById(id);
    res.json({ opportunity });
});

opportunityRouter.put("/opportunity/:id", (req, res) => {
    const { id } = req.params;
    const { title, description, location, ongId, startDate, endDate, requirements } = req.body;
    const opportunity = updateOpportunity(id, title, description, location, ongId, startDate, endDate, requirements);
    res.json({ opportunity });
});

opportunityRouter.delete("/opportunity/:id", (req, res) => {
    const { id } = req.params;
    const success = deleteOpportunity(id);
    res.json({ success });
});

export { opportunityRouter };
