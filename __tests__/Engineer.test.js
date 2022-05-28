const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('getId', () => {
        it('get engineer id', () => {
            const engineer = new Engineer(1, "Alessandro", "abelaj7196@gmail.com", "Engineer", "abelaj");

            expect(engineer.getId()).toEqual(1);
        });
    })

    describe('getName', () => {
        it('get engineer name', () => {
            const engineer = new Engineer(1, "Alessandro", "abelaj7196@gmail.com", "Engineer", "abelaj");

            expect(engineer.getName()).toBe("Alessandro");
        });
    })

    describe('getEmail', () => {
        it('get engineer name', () => {
            const engineer = new Engineer(1, "Alessandro", "abelaj7196@gmail.com", "Engineer", "abelaj");

            expect(engineer.getEmail()).toBe("abelaj7196@gmail.com");
        });
    })

    describe('getRole', () => {
        it('get engineer name', () => {
            const engineer = new Engineer(1, "Alessandro", "abelaj7196@gmail.com", "Engineer", "abelaj");

            expect(engineer.getRole()).toBe("Engineer");
        });
    })

    describe('getGithub', () => {
        it('get engineer name', () => {
            const engineer = new Engineer(1, "Alessandro", "abelaj7196@gmail.com", "Engineer", "abelaj");

            expect(engineer.getGithub()).toBe("abelaj");
        });
    })

});