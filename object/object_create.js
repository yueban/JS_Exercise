'use strict'

// function Student(name) {
//     this.name = name;
//     this.hello = function () {
//         console.log('hello, ' + this.name);
//     };
// }

// var jack = new Student('jack');
// jack.hello();

// // console.log(jack.constructor === Student.prototype.constructor);
// // console.log(jack.constructor === Student);
// // console.log(Student.prototype.constructor === Student);
// // console.log(Object.getPrototypeOf(jack) == Student.prototype);
// // console.log(jack instanceof Student);
// // console.log(jack instanceof Object);
// // console.log(jack.__proto__ === Student.prototype);

// var tom = new Student('tom');
// console.log(jack.name === tom.name);
// console.log(jack.hello === tom.hello);


// function Student(name) {
//     this.name = name;
// }

// Student.prototype.hello = function () {
//     console.log('hello, ' + this.name);
// };

// var jack = new Student('jack');
// var tom = new Student('tom');
// console.log(jack.hello === tom.hello);


function Student(props) {
    this.name = props.name || 'annoymous';
    this.grade = props.grade || 1;
}

Student.prototype.hello = function () {
    console.log('hello, ' + this.name);
};

function createStudent(props) {
    return new Student(props || {});
}

var student = createStudent();
console.log(student);
student.hello();

var jack = createStudent({
    name: 'jack'
});
console.log(jack);
jack.hello();

var tom = createStudent({
    name: 'tom',
    grade: 3
});
console.log(tom);
tom.hello();