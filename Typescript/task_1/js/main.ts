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
  
  console.log(teacher1);
  console.log(teacher2);
  