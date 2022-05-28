const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('getId', () => {
        it('get manager id', () => {
            const manager = new Manager(1, "Alessandro", "abelaj7196@gmail.com",14, "Manager");

            expect(manager.getId()).toEqual(1);
        });
    })

    describe('getName', () => {
        it('get manager name', () => {
            const manager = new Manager(1, "Alessandro", "abelaj7196@gmail.com",14, "Manager");

            expect(manager.getName()).toBe("Alessandro");
        });
    })

    describe('getEmail', () => {
        it('get manager email', () => {
            const manager = new Manager(1, "Alessandro", "abelaj7196@gmail.com",14, "Manager");

            expect(manager.getEmail()).toBe("abelaj7196@gmail.com");
        });
    })

    describe('getOfficeNumber', () => {
        it('get manager office number', () => {
            const manager = new Manager(1, "Alessandro", "abelaj7196@gmail.com",14, "Manager");

            expect(manager.getOfficeNumber()).toEqual(14);
        });
    })

    describe('getRole', () => {
        it('get manager role', () => {
            const manager = new Manager(1, "Alessandro", "abelaj7196@gmail.com",14, "Manager");

            expect(manager.getRole()).toBe("Manager");
        });
    })

})
