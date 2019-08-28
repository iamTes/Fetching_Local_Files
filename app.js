// <---------------Working with the classes and constructors-------------->
class Person {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        const now = new Date().getFullYear();
        const age = now - this.yearOfBirth;
        console.log(`${this.name} is ${age} years old. And he is a ${this.job}`);
    }
}
class Kid extends Person {
    constructor(name, yearOfBirth, job, behavior) {
        super(name, yearOfBirth, job);
        this.behavior = behavior;
    }
    ChildBehavior() {
        console.log(`${this.name} is a child with weird ${this.behavior}`);
    }
}
class Criminal extends Kid {
    constructor(name, yearOfBirth, job, behavior, criminalCase) {
        super(name, yearOfBirth, job, behavior);
        this.criminalCase = criminalCase
    }
    crime() {
        console.log(`${this.name} is a criminal with a ${this.criminalCase} case.`);
    }
}
const Slim_Box = new Criminal('Slim Box', 2001, 'Criminal', 'Nerd', " GangBangin'");
console.log(Slim_Box);
Slim_Box.crime();

console.log('-----------------------------------------------');

const John = new Person('John', 1990, 'Teacher');
console.log(John.name);
John.calculateAge();
// John.ChildBehavior();

console.log('-----------------------------------------------');


const King = new Kid('Knight', 2018, 'Child', 'playing');
console.log(King.behavior);
King.ChildBehavior();
King.calculateAge();