class Student {
    #name
    #finished

    constructor(name) {
        this.#name=name
        this.#finished = false
    }

    getName() {
        return this.#name
    }

    getFinished() {
        return this.#finished
    }

    setFinished() {
        this.#finished = true
    }
}

const student = new Student ("John")
console.log(student)
console.log(student.getName())
console.log(student.getFinished())
student.setFinished(true)
console.log(student.getFinished())
