const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('getId', () => {
        it('get intern id', () => {
            const intern = new Intern(1, "Alessandro", "abelaj7196@gmail.com", "Columbia", "Intern");

            expect(intern.getId()).toEqual(1);
        });
    })

    describe('getName', () => {
        it('get intern name', () => {
            const intern = new Intern(1, "Alessandro", "abelaj7196@gmail.com", "Columbia", "Intern");

            expect(intern.getName()).toBe("Alessandro");
        });
    })

    describe('getEmail', () => {
        it('get intern email', () => {
            const intern = new Intern(1, "Alessandro", "abelaj7196@gmail.com", "Columbia", "Intern");

            expect(intern.getEmail()).toBe("abelaj7196@gmail.com");
        });
    })

    describe('getSchool', () => {
        it('get intern school', () => {
            const intern = new Intern(1, "Alessandro", "abelaj7196@gmail.com", "Columbia", "Intern");

            expect(intern.getSchool()).toBe("Columbia");
        });
    })

    describe('getRole', () => {
        it('get intern role', () => {
            const intern = new Intern(1, "Alessandro", "abelaj7196@gmail.com", "Columbia", "Intern");

            expect(intern.getRole()).toBe("Intern");
        });
    })

});