// ---------- EXAMPLE 1 ---------- //
// class Department {
//   name: string;

//   constructor(n: string) {
//     this.name = n;
//   }

//   describe(this: Department) {
//     console.log('Department: ' + this.name);
//   }
// }

// const accounting = new Department("Accounting");

// // will print "Department: Accounting"
// accounting.describe()


// const accountingCopy = { describe: accounting.describe};
// // ^^
// // 1. this causes an error because accountingCopy has an exact copy of the describe method from the Department class;
// // 2. the describe() method is expecitng a "this" argument that is an instance of the Department class/follows the rules of the department class.
// // 3. this means that the "this" that is being passed in, needs to have a name property because that is how the Department instance is built.
// // 4. to fix this issue, we would simply have to add the name property to the accountingCopy object like so:
// // const accountingCopy = { name: 'bo', describe: accounting.describe};

// // otherwise, if we don't add the (this: Department) type in the describe method arg, when it looks for this.name, it will return undefined because the accountingCopy object does not have a "name" property which would be its this.name
// // we add that line to help us catch this error like the line below does.
// accountingCopy.describe();


// ---------- EXAMPLE 2 ---------- //
class Department {
  // this line is being replaced below
  // name: string;

  // setting the property of employees to private means that we can only reference it within this class.
  // this means that you cant access the property even from classes that inherit this class
  // you can set methods as private as well.
  private employees: string[] = [];
  // if you want classes that inherit this class to have access to the employees property, you can use the "protected" keyword.
  // protected employees: string[] = [];


  // the line of code: "public name: string" below, is a shorthand way of declaring the name property(first line we removed at the start of the class) and setting it to this.name(the line below).
  // the readonly property makes it so that you can't edit the property that it is tied to.
  constructor(public readonly name: string) {
    // this.name = name;
  }

  describe(this: Department) {
    console.log('Department: ' + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeesInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department('Accounting')

accounting.describe();

accounting.addEmployee('bo');
accounting.addEmployee('bobo');
accounting.addEmployee('beau');

accounting.printEmployeesInfo();
