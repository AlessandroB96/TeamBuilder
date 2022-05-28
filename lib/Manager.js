const Employee = require('./Employee');

class Manager extends Employee {
    constructor(id, name, email, officeNumber, role) {
        //calling parent object
        super(id, name, email, role);
        this.officeNumber = officeNumber;
    }

    getId() {
        return this.id
    }

    getName() {
        return this.name
    }

    getEmail() {
        return this.email
    }

    getOfficeNumber() {
        return this.officeNumber
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;