import { Volunteer } from "../models/volunteer.model.js";

let volunteerList = [];

export const createVonluteer = (name, email, phone, interests) => {
    let volunteer  = new Volunteer(name, email, phone, interests);
    volunteerList.push(volunteer);
    return volunteer;
}

export const getAllVolunteers = () => {
    return volunteerList;
};