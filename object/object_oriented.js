'use strict'

var Student = {
    name: 'Robot',
    height: 1.2,
    run: function () {
        console.log(this.name + ' is running');
    }
};

// var xiaoming = {
//     name: 'xiaoming'
// };

// xiaoming.__proto__ = Student;
// xiaoming.run();

// var Bird = {
//     fly: function () {
//         console.log(this.name + ' is flying');
//     }
// };

// xiaoming.__proto__ = Bird;
// xiaoming.fly();

function createStudent(name) {
    var student = Object.create(Student);
    student.name = name;
    return student;
}

var jack = createStudent('jack');
jack.run();
console.log(jack.__proto__ === Student);