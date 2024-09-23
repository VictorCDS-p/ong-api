import { v4 as uuidv4 } from "uuid";

export class Opportunity {
    constructor(title, description, location, ongId, startDate, endDate, requirements) {
        this.id = uuidv4();
        this.title = title;
        this.description = description;
        this.location = location;
        this.ongId = ongId;
        this.startDate = startDate;
        this.endDate = endDate;
        this.requirements = requirements;
        this.volunteers = [];
    }
}
