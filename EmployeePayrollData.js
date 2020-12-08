class EmployeePayrollData{

    //property
    id;
    salary;
    gender;
    startDate;

    /*//constructor
    constructor(id,name,salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
    }*/

    //A class ccan have only one constructor
    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
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
        const options = {year : 'numeric' , month : 'long' , day : 'numeric'};
        const empDate = this.startDate == undefined ? "undefined" : this.startDate.toLocaleDateString("en-US",options);
        return "id = " + this.id + " name = " + this.name + " salary " + this.salary + " gender : " + this.gender 
        + " startDate : " + empDate;
    }
}

let employeePayrollData = new EmployeePayrollData(1,"Mark",50000);
console.log(employeePayrollData.toString());
employeePayrollData.name = "John";
console.log(employeePayrollData.toString());

let newEmployeePayrollData = new EmployeePayrollData(2,"Terrisa",30000,"F",new Date());
console.log(newEmployeePayrollData.toString());


