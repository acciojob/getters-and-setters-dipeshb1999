class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set age(value) {
    this._age = value;
  }
}

class Student extends Person {
  study() {
    console.log(`${this._name} is studying`);
  }
}

class Teacher extends Person {
  teach() {
    console.log(`${this._name} is teaching`);
  }
}

// Create instances and call methods
const person = new Person("John", 25);
const student = new Student("Alice", 20);
const teacher = new Teacher("Mr. Smith", 40);

person.age = 30;
student.study();
teacher.teach();

// Display output
const outputDiv = document.getElementById('output');
outputDiv.innerHTML = `
  <p>Person:</p>
  <p>Name: ${person.name}</p>
  <p>Age: ${person.age}</p>
  <br>
  <p>Student:</p>
  <p>Name: ${student.name}</p>
  <p>Age: ${student.age}</p>
  <br>
  <p>Teacher:</p>
  <p>Name: ${teacher.name}</p>
  <p>Age: ${teacher.age}</p>
`;
