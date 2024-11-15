class Student {
    constructor (firstname, lastname, age) {
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
    }
}

class Person {
    constructor () {
        this.firstname = ""
        this.lastname = ""
        this.age = 0
    }
}

person1 = new Person()
    person1.firstname = 'Tony'
    person1.lastname = 'Soprano'
    person1.age = 48

person2 = new Person()
    person2.firstname = 'Bat'
    person2.lastname = 'Man'
    person2.age = 35

person3 = new Person()
    person3.firstname = 'Rünno'
    person3.lastname = 'Paeluss'
    person3.age = 42    

console.log(person1)
console.log(person2)
console.log(person3)

const student1 = new Student('Helmo', 'Vars', 62)
const student2 = new Student('Ahto', 'Leemet', 23)
const student3 = new Student('Olme', 'Prügi', 44)

console.log(student1)
console.log(student2)
console.log(student3)