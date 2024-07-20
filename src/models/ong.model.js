import { v4 as uuidv4 } from 'uuid';
export class ONG{
    constructor(name, description, location, website, contactemail){
        this.id = uuidv4();
        this.name = name;
        this.description = description;
        this.location = location;
        this.website = website;
        this.contactemail = contactemail;
    }
}