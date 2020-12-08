class EmployeePayrollData{

    //property
    id;
    salary;

    //constructor
    constructor(id,name,salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    //getter and setter method
    get getName() {
        return this._name;
    }

    set setName(name) {
        this._name = name;
    }

    //method
    toString() {
        return "id = " + this.id + " name = " + this.name + " salary " + this.salary;
    }
}

let employeePayrollData = new EmployeePayrollData(1,"Mark",50000);
console.log(employeePayrollData.toString());
employeePayrollData.name = "John";
console.log(employeePayrollData.toString());