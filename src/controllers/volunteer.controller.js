import { Volunteer } from "../models/volunteer.model.js";

let volunteerList = [];

export const createVolunteer = (name, email, phone, interests) => {
    let volunteer  = new Volunteer(name, email, phone, interests);
    volunteerList.push(volunteer);
    return volunteer;
}

export const getAllVolunteers = () => {
    return volunteerList;
};

export const getVolunteerById = (id) => {
    return volunteerList.find(volunteer => volunteer.id === id);
};

export const updateVolunteer = (id, name, email, phone, interests) => {
    const volunteer = volunteerList.find(volunteer => volunteer.id === id);
    if (volunteer) {
        volunteer.name = name;
        volunteer.email = email;
        volunteer.phone = phone;
        volunteer.interests = interests;
    }
    return volunteer;
}

export const deleteVolunteer = (id) => {
    const indexVolunteer = volunteerList.findIndex(volunteer => volunteer.id === id);
    if (indexVolunteer !== -1){
        volunteerList.splice(indexVolunteer, 1);
        return true;
    }
    return false;
}