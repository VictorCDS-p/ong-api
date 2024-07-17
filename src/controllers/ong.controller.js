import { ONG } from "../models/ong.model.js";

let ongList = [];

export const createONG = (name, description, location, website, contactEmail) => {
    let ong = new ONG(name, description, location, website, contactEmail);
    ongList.push(ong);
    return ong;
};

export const getAllNGOs = () => {
    return ongList;
};