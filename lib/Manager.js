const Employee = require('./Employee');

class Manager extends Employee {
    constructor(id, name, email, officeNumber, role) {
        //calling parent object
        super(name, id, email, role);
        this.officeNumber = officeNumber;
    }

    getId() {
        return this.name
    }

    getName() {
        return this.name
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;