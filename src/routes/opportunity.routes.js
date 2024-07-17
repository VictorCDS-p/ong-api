import { Router } from "express";
import { createOpportunity, getAllOpportunities } from "../controllers/opportunity.controller.js";

const opportunityRouter = Router();

opportunityRouter.post("/opportunity", (req, res) => {
    const { title, description, location, ngoId, startDate, endDate, requirements } = req.body;
    const opportunity = createOpportunity(title, description, location, ngoId, startDate, endDate, requirements);
    res.json({ opportunity });
});

opportunityRouter.get("/opportunity", (req, res) => {
    const opportunityList = getAllOpportunities();
    res.json({ opportunityList });
});

export { opportunityRouter };
