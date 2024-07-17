import { Opportunity } from "../models/opportunity.model.js";

let opportunityList = [];

export const createOpportunity = (title, description, location, ngoId, startDate, endDate, requirements) => {
    let opportunity = new Opportunity(title, description, location, ngoId, startDate, endDate, requirements);
    opportunityList.push(opportunity);
    return opportunity;
};

export const getAllOpportunities = () => {
    return opportunityList;
};