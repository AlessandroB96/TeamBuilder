const Employee = require('./Employee');

class Intern extends Employee {
    constructor(id, name, email, school, role) {
        super(id, name, email, role)
        this.school = school
        this.role = 'Intern';
    }

    getName() {
        return this.name;
    };

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;

