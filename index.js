const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//starting with manager 
let role = 'Manager';
class Input {
    constructor() {
        this.index = 0;
    }

    getName(role) {
        inquirer
            .prompt({
                type: 'text',
                name: 'name',
                message: `What is the ${role}'s name?`,
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log(`Please enter ${role} name!`);
                        return false;
                    } 
                }  
            })
            .then(({ name }) => {
                //establishing new employee name
                this.employee = new Employee(name);
                this.getId(name,role)
            })
    }
    //function to get as for the id 
    getId(name,role){
        inquirer
            .prompt({
                type: 'input',
                name: 'id',
                message: `What is the ${role}'s id?`,
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log('Please enter an id!');
                        return false;
                    }
                } 
            })
                .then(({ id }) => {
                    //saving id to employee class
                    this.employee = new Employee(name, id);
                    this.getEmail(name,id,role);
                })
    }
}

new Input().getName(role)


module.exports = Input;