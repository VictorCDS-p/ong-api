import { Opportunity } from "../models/opportunity.model.js";

let opportunityList = [];

export const createOpportunity = (title, description, location, ongId, startDate, endDate, requirements) => {
    let opportunity = new Opportunity(title, description, location, ongId, startDate, endDate, requirements);
    opportunityList.push(opportunity);
    return opportunity;
};

export const getAllOpportunities = () => {
    return opportunityList;
};

export const getOpportunityById = (id) => {
    return opportunityList.find(opportunity => opportunity.id === id);
};

export const updateOpportunity = (id, title, description, location, ongId, startDate, endDate, requirements) => {
    const opportunity = opportunityList.find(opportunity => opportunity.id === id);
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