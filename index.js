const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//starting with manager 
let role = 'Manager';
let employeeList = [];
class Input {
    constructor() {
        this.index = 0;
    }

    
    
    getName(role) {
        console.log(`
        ==========================================
        𝐖 𝐄 𝐋 𝐂 𝐎 𝐌 𝐄  𝐓 𝐎  𝐓 𝐄 𝐀 𝐌  𝐁 𝐔 𝐈 𝐋 𝐃 𝐄 𝐑
        ==========================================
        `);
        inquirer
            .prompt({
                type: 'text',
                name: 'name',
                message: `What is the ${role}'s name?`,
                validate: name => {
                    if (name) {
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
    getId(name,role){
        inquirer
            .prompt({
                type: 'input',
                name: 'id',
                message: `What is the ${role}'s id?`,
                validate: id => {
                    if (id) {
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
    getEmail(name,id,role){
        inquirer
            .prompt({
                type: 'string',
                name: 'email',
                message: `What is the ${role}'s email?`,
                validate: email => {
                    if (email) {
                        return true;
                    } else {
                        console.log('Please enter an email address!');
                        return false;
                    }
                } 
            })
            .then(({ email }) => {
                //save email to employee class
                this.employee = new Employee(name, id, email);
                this.getRole(name, id, email,role)
            })
    }
    getRole(name,id,email,role){
        //beginning of employee array = manager
        if(this.index === 0){
            let role = 'Manager'
            //adds to manager class
            this.manager = new Manager(name, id, email, role);
            this.getOfficeNumber(name, id, email, role);
        } else {
            //if Engineer
            if (role === 'Engineer'){
                this.engineer = new Engineer(name, id, email, role);
                this.getGithub(name, id, email, role);
            } else {
                //if intern
                this.intern = new Intern(name, id, email, role);
                this.getSchool(name, id, email, role);
            }
        }
    }
    getOfficeNumber(name,id,email,role){
        //prompts user to input employee role
        inquirer
            .prompt({
                type: 'input',
                name: 'number',
                message: `What is the Manager's office number?`,
                validate: numberInput => {
                    if (numberInput) {
                        return true;
                    } else {
                        console.log('Please enter number');
                        return false;
                    }
                } 
            })
            .then(({ number }) => {
                this.manager = new Manager(name, id, email, role, number);
                //adds new manager to employee list
                employeeList.push(this.manager);
                this.addEmployee(employeeList);
            })
    }
    getGithub(name,id,email,role){
        inquirer
            .prompt({
                type: 'input',
                name: 'github',
                message: "What is the Engineer's github username?",
                validate: github => {
                    if (github) {
                        return true;
                    } else {
                        console.log(`Please enter the engineer's github username!`);
                        return false;
                    }
                } 
            })
            .then(({ github }) => {
                this.engineer = new Engineer(name, id, email, role, github);
                //add engineer to employee list
                employeeList.push(this.engineer);
                //goes to add employee method
                this.addEmployee(employeeList);
            })
    }
    getSchool(name,id,email,role){
        //prompts user to input employee role
        inquirer
            .prompt({
                type: 'input',
                name: 'school',
                message: "What is the Intern's school?",
                validate: school => {
                    if (school) {
                        return true;
                    } else {
                        console.log(`Please enter the intern's school!`);
                        return false;
                    }
                } 
            })
            .then(({ school }) => {
                this.intern = new Intern(name, id, email, role, school);
                employeeList.push(this.intern);
                // console.log(employeeArray)
                this.addEmployee(employeeList);
            })
    }
    addEmployee(employee){
        inquirer
            // asks user if they want to add another employee
            .prompt({
                type: 'confirm',
                name: 'AddEmployee',
                message: 'Would you like to add another employee?',
                default: false
            })
            .then(({ AddEmployee }) => {
                //if the answer is yes
                if (AddEmployee) {
                    //increment to move away from the manager class
                    this.index++;
                    //shows a new employee is being added
                    console.log(`
                    𝘼 𝘿 𝘿   𝙉 𝙀 𝙒   𝙀 𝙈 𝙋 𝙇 𝙊 𝙔 𝙀 𝙀
                    `);
                    inquirer
                        .prompt({
                            type: 'list',
                            name: 'role',
                            message: 'What is the employee role?',
                            choices: ['Intern','Engineer']
                        })
                        .then(({ role }) => {
                            this.getName(role);
                        })
                } else {
                    console.log('File has been created!');
                }
            })
    }
}

new Input().getName(role)


module.exports = Input;