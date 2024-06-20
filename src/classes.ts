/** @format */

abstract class Department {
  // private id : string,
  // public name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    this.name = name;
  }
  // describe(this: Department) {
  //   console.log(`Department (${this.id}):${this.name}`);
  // }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInfo() {
    console.log(this.employees);
    console.log(this.employees.length);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
  describe() {
    console.log(`ccounting Department - ID ${this.id}`);
  }
}

class AccountingDepartment extends Department {
  static fiscalYEar = 2020;
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  set mostRecentReport(v: string) {
    if (!v) {
      throw new Error("please pass in a valif value");
    }
    this.addReport(v);
  }

  constructor(id: string, protected reports: string[]) {
    super(id, "IT");
    this.lastReport = reports[0];
  }

  describe() {
    console.log(`ccounting Department - ID ${this.id}`);
  }
  addEmployee(name: string): void {
    if (name === "MAX") {
      return;
    }
    this.employees.push(name);
  }

  static createEmployee(name: string) {
    return { name };
  }
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  printReports() {
    console.log(this.reports);
  }
}

const employee1 = AccountingDepartment.createEmployee("MAk");
console.log(employee1, AccountingDepartment.fiscalYEar);
// kkk
// const accounting = new Department("Id", "Accounting");
const results = new AccountingDepartment("AA", []);

console.log(results.describe());

results.mostRecentReport = "jet";
console.log(results.mostRecentReport);
results.addReport("somthing went wrong");
results.printReports();
console.log("here");
// const cheif = accounting.describe();

// accounting.addEmployee("Max");
// accounting.addEmployee("MANND");
// accounting.addEmployee("jetthro");
// accounting.printEmployeeInfo();

// console.log(accounting.describe());
// const accountingCopy = { name: "Dummy", describe: accounting.describe };
// accountingCopy.describe();
