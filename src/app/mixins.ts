import { sealed, logger, writable } from './decorators';
export interface Person {
  name: string;
  email: string;
}

export interface Librarian extends Person {
  department: string;
  assistCustomer: (custName: string) => void;
}

export class Employee {
  title: string;

  addToSchedule(): void {
    console.log('Employee added to schedule.');
  }

  logTitle(): void {
    console.log(`Employee has the title ${this.title}.`);
  }
}

export class Researcher {
  doResearch(topic: string): void {
    console.log(`Doing research on ${topic}.`);
  }
}

// @logger
// @sealed('UniversityLibrarian')
export class UniversityLibrarian implements Librarian, Employee, Researcher {
  name: string;
  email: string;
  department: string;

  // @writable(true)
  assistCustomer(custName: string) {
    console.log(this.name + ' is assisting ' + custName);
  }

  // implementation of the following to be provided by the mixing function
  title: string;
  addToSchedule: () => void;
  logTitle: () => void;
  doResearch: (topic: string) => void;
}

export function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtor => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
      derivedCtor.prototype[name] = baseCtor.prototype[name];
    });
  });
}
