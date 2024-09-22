import { ONG } from "../models/ong.model.js";

let ongList = [];

export const createONG = (name, description, location, website, contactEmail) => {
    const ong = new ONG(name, description, location, website, contactEmail);
    ongList.push(ong);
    return ong;
};

export const getAllONGs = () => ongList;

export const getONGById = (id) => ongList.find(ong => ong.id === id);

export const updateONG = (id, name, description, location, website, contactEmail) => {
    const ong = getONGById(id);
    if (ong) {
        ong.name = name;
        ong.description = description;
        ong.location = location;
        ong.website = website;
        ong.contactEmail = contactEmail;
    }
    return ong;
};

export const deleteONG = (id) => {
    const index = ongList.findIndex(ong => ong.id === id);
    if (index !== -1) {
        ongList.splice(index, 1);
        return true;
    }
    return false;
};
