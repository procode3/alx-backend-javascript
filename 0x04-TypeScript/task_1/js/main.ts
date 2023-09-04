interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience: number;
  location: string;
  [key: string]: any;
}


interface Director extends Teacher {
  numberOfReports: number;

}

interface printTeacherFunction {
  (a: string, b: string): string;
}


const printTeacher: printTeacher = (firstName, lastName)=> {
  return `firstName.charAt(0). lastName` 
}


interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentInterface {
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
