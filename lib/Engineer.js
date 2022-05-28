const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(id, name, email, role, github) {
        super(id, name, email, role);
        this.github = github;
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

    getGithub() {
        return this.github
    }

    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer