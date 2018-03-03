'use strict'

class Student {
    constructor(name) {
        this.name = name || 'unnamed';
    }

    hello() {
        console.log('hello, ' + this.name);
    }
}

var jack = new Student('jack');
console.log(jack);
jack.hello();

class PrimaryStudent extends Student {
    constructor(name, grade) {
        super(name);
        this.grade = grade || 1;
    }

    printGrade() {
        console.log('grade: ' + this.grade);
    }
}

var tom = new PrimaryStudent('tom', 3);
console.log(tom);
tom.hello();
tom.printGrade();