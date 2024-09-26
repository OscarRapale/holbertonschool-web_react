// Define the Teacher interface
interface Teacher {
    readonly firstName: string;   // readonly ensures it can only be set during initialization
    readonly lastName: string;    // readonly ensures it can only be set during initialization
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;   // optional
    location: string;
  
    // Index signature to allow extra properties
    [propName: string]: any;
  }
  
  const teacher1: Teacher = {
    firstName: 'Alice',
    lastName: 'Johnson',
    fullTimeEmployee: true,
    location: 'California',
    contract: false,  // extra property not defined in the interface
  };
  
  const teacher2: Teacher = {
    firstName: 'Bob',
    lastName: 'Smith',
    fullTimeEmployee: false,
    yearsOfExperience: 5,
    location: 'New York',
    contract: true,  // extra property
  };

// Define the Directors interface that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number; // required for Directors
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

// Define the printTeacherFunction interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

// Implement the StudentClass
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

const student = new StudentClass('John', 'Doe');
console.log(student.displayName());
console.log(student.workOnHomework());


console.log(printTeacher("John", "Doe"));


console.log(director1);
console.log(teacher1);
console.log(teacher2);
  