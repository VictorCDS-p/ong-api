import { Volunteer } from "../models/volunteer.model.js";
import { getAllONGs } from "../controllers/ong.controller.js"; 
import { getAllOpportunities, getOpportunityById } from "../controllers/opportunity.controller.js";

let volunteerList = [];

export const createVolunteer = (name, email, phone, interests, ongId, opportunityId) => {
    const ongExists = getAllONGs().some(ong => ong.id === ongId);
    const opportunityExists = getAllOpportunities().some(opportunity => opportunity.id === opportunityId);

    if (!ongExists) {
        throw new Error("ONG não encontrada");
    }
    if (!opportunityExists) {
        throw new Error("Oportunidade não encontrada");
    }

    const volunteer = new Volunteer(name, email, phone, interests, ongId, opportunityId);
    volunteerList.push(volunteer);
    
    const ong = getAllONGs().find(ong => ong.id === ongId);
    ong.volunteers.push(volunteer.id);

    const opportunity = getOpportunityById(opportunityId);
    opportunity.volunteers.push(volunteer.id);

    return volunteer;
};

export const getAllVolunteers = () => volunteerList;

export const getVolunteerById = (id) => volunteerList.find(volunteer => volunteer.id === id);

export const updateVolunteer = (id, name, email, phone, interests) => {
    const volunteer = getVolunteerById(id);
    if (volunteer) {
        volunteer.name = name;
        volunteer.email = email;
        volunteer.phone = phone;
        volunteer.interests = interests;
    }
    return volunteer;
};

export const deleteVolunteer = (id) => {
    const index = volunteerList.findIndex(volunteer => volunteer.id === id);
    if (index !== -1) {
        volunteerList.splice(index, 1);
        return true;
    }
    return false;
};
