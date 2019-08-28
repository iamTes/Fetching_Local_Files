// working with the spread operator and some destructuring ...
/*
const xheria = [0, 1, 2, 3];
const [x1, x2, x3, x4] = xheria;
console.log(x2);

const names = ['John', 'Tes', 'Cinderalla', 'Mike', 'Knight'];
const [a, b, c, d, e] = names;
console.log(e);

const obj = {
    name: 'Tesluach',
    yearOfBirth: 1990,
    job: 'Teacher'
};

const {
    name: a,
    yearOfBirth: b,
    job: c
} = obj;
console.log(b, c, a);

const firstFamily = ['King', 'Tes', 'Noah', 'Nerd'];
const secondFamily = ['Sarah', 'Suzan', 'Slim Box', 'Black Smoker'];
const all = [...firstFamily, ...secondFamily];
const [a, b, c] = all;
console.log(a);

const obj1 = {
    name: 'Knight',
    yearOfBirth: 1990,
    job: 'Software Engineer'
};
const obj2 = {
    crime: 'Theft',
    height: '2ft',
    class: 'fourth Grade'
};
const all_things = {
    ...obj1,
    ...obj2
};
const {
    name,
    class: grade
} = all_things;
console.log(`${name} is in ${grade}`);
*/

//Working with objects again
// var data2 = [{
//         "name": "Eliza King",
//         "yearOfBirth": 2001,
//         "job": "Student",
//         "Status": "Searching...",
//         "gender": "Female"
//     },
//     {
//         "name": "Love Knight",
//         "yearOfBirth": 1990,
//         "job": "Andelan",
//         "Status": "Married",
//         "gender": "Female"
//     }
// ]

const input = document.querySelector('input[type="text"]');

const data2 = [];

function external() {
    fetch('data2.json')
        .then((res) => res.json())
        .then((data) => {
            data2.push(...data);
        });
}
external();

//selecting the button
document.querySelector('#button').addEventListener('click', getData);

function getData() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', input.value, true);
    xhr.onload = function () {
        if (this.status == 200) {
            const data = JSON.parse(this.responseText);
            const full_data = [...data, ...data2];
            let output = '<h2>Fetched Data</h2>';
            full_data.filter((event) => {
                if (event.gender === 'Female') {
                    const {
                        name,
                        job,
                        Status,
                        gender
                    } = event;
                    output += `
                            <ul>
                            <li>Name: ${name}</li>
                            <li>Job: ${job}</li>
                            <li>Status: ${Status}</li>
                            <li>Gender: ${gender}</li>
                            </ul>
                                `;
                }
            });
            document.getElementById('user').innerHTML = output;
        }
    };
    xhr.send();
}