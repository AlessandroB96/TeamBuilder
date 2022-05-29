const Employee = require('./Employee');

class Manager extends Employee {
    constructor(id, name,email,role, officeNumber) {
        //calling parent object
        super(id, name, email, role);
        this.officeNumber = officeNumber;
        this.role = 'Manager';
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

    getRole() {
        return 'Manager';
    }
    getOfficeNumber() {
        return this.officeNumber
    }
}

module.exports = Manager;