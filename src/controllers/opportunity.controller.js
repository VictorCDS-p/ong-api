import { Opportunity } from "../models/opportunity.model.js";
import { getAllONGs } from "../controllers/ong.controller.js"; 

let opportunityList = [];

export const createOpportunity = (title, description, location, ongId, startDate, endDate, requirements) => {
    const ongExists = getAllONGs().some(ong => ong.id === ongId);
    if (!ongExists) {
        throw new Error("ONG não encontrada");
    }

    const opportunity = new Opportunity(title, description, location, ongId, startDate, endDate, requirements);
    opportunityList.push(opportunity);
    
    const ong = getAllONGs().find(ong => ong.id === ongId);
    ong.opportunities.push(opportunity.id);

    return opportunity;
};

export const getAllOpportunities = () => opportunityList;

export const getOpportunityById = (id) => opportunityList.find(opportunity => opportunity.id === id);

export const updateOpportunity = (id, title, description, location, ongId, startDate, endDate, requirements) => {
    const opportunity = getOpportunityById(id);
    if (opportunity) {
        opportunity.title = title;
        opportunity.description = description;
        opportunity.location = location;
        opportunity.ongId = ongId;
        opportunity.startDate = startDate;
        opportunity.endDate = endDate;
        opportunity.requirements = requirements;
    }
    return opportunity;
};

export const deleteOpportunity = (id) => {
    const index = opportunityList.findIndex(opportunity => opportunity.id === id);
    if (index !== -1) {
        opportunityList.splice(index, 1);
        return true;
    }
    return false;
};
