import { v4 as uuidv4 } from "uuid";

export class ONG {
    constructor(name, description, location, website, contactEmail) {
        this.id = uuidv4();
        this.name = name;
        this.description = description;
        this.location = location;
        this.website = website;
        this.contactEmail = contactEmail;
        this.opportunities = []; 
        this.volunteers = []; 
    }
}
