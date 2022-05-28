const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('getName', () => {
        it('get employee name', () => {
            const employee = new Employee(1, "Alessandro", "abelaj7196@gmail.com", "Employee");

            expect(employee.getName()).toBe("Alessandro");
        });
    })

    describe('getId', () => {
        it('get employee id', () => {
            const employee = new Employee(1, "Alessandro", "abelaj7196@gmail.com", "Employee");

            expect(employee.getId()).toEqual(1);
        })
    })

    describe('getEmail', () => {
        it('get employee email', () => {
            const employee = new Employee(1, "Alessandro", "abelaj7196@gmail.com", "Employee");

            expect(employee.getEmail()).toBe("abelaj7196@gmail.com");
        })
    })

    describe('getRole', () => {
        it('get employee role', () => {
            const employee = new Employee(1, "Alessandro", "abelaj7196@gmail.com", "Employee");

            expect(employee.getRole()).toBe("Employee");
        })
    })
});