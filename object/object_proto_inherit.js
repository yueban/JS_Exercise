'use strict'

function Student(props) {
    this.name = props.name || 'unnamed';
}

Student.prototype.hello = function () {
    console.log('hello, ' + this.name);
}

function PrimaryStudent(props) {
    Student.call(this, props);
    this.grade = props.grade || 1;
}

function inherits(Child, Parent) {
    var F = function () {};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
}

inherits(PrimaryStudent, Student);

// function F() {}
// F.prototype = Student.prototype;
// PrimaryStudent.prototype = new F();
// PrimaryStudent.prototype.constructor = PrimaryStudent;

PrimaryStudent.prototype.getGrade = function () {
    console.log('grade: ' + this.grade);
}

var jack = new PrimaryStudent({
    name: 'jack'
});
jack.hello();
jack.getGrade();
console.log(jack.__proto__ === PrimaryStudent.prototype);
console.log(jack.__proto__.__proto__ === Student.prototype);
console.log(jack.__proto__.constructor === PrimaryStudent);
console.log(jack instanceof PrimaryStudent);
console.log(jack instanceof Student);