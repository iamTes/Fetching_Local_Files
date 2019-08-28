//---------------Working with rest parameters---------------
/*
// ES5
function isFullAge5(limit) {
    const argArr = Array.prototype.slice.call(arguments, 1);
    argArr.forEach(cur => {
        const now = new Date().getFullYear();
        console.log((now - cur) >= limit);
    });
}

// isFullAge5(21, 1990, 1995, 1999, 2011);

// ES6------------
function isFullAge6(limit, ...years) {
    years.forEach(cur => {
        const now = new Date().getFullYear();
        console.log((now - cur) >= limit);
    });
}
isFullAge6(18, 2000, 1999, 2012, 1950);
*/
//-------------------Working with the default parameters----------
/*
function Person(firstName, yearOfBirth, lastName, nationality) {
    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
    nationality === undefined ? nationality = 'American' : nationality = nationality;

    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}
*/
class Person {
  constructor(
    firstName,
    yearOfBirth,
    lastName = 'Smith',
    nationality = 'American'
  ) {
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
  }
}

/*
var john = new Person('king', 1990);
var emily = new Person('Emily', 1990, 'Diaz', 'Canadian');
console.log(john);
console.log(emily);
*/

//----------------Working with maps in javaScript-------------

const question = new Map();
// The question
question.set(
  'question',
  'What is the official name of the latest major javaScript version?'
);
// The answers
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES2017');

question.set('correct', 3);
question.set(true, 'Correct answer.');
question.set(false, 'Wrong, please try again!');

const ans = parseInt(prompt('Enter the correct answer: '));
console.log(question.get(ans === question.get('correct')));
