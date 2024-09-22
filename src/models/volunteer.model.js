import { v4 as uuidv4 } from 'uuid';

export class Volunteer {
    constructor(name, email, phone, interests, ongId, opportunityId) {
        this.id = uuidv4();
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.interests = interests;
        this.ongId = ongId;
        this.opportunityId = opportunityId;
    }
}
