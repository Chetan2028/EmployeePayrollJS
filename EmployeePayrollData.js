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
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}');
        if(nameRegex.test(name)) {
        this._name = name;
        }
        else
            throw "Name is Incorrect!";
    }

    get getId(){
        return this._id;
    }

    set setId(id) {
        let nameRegex = RegExp("^[1-9]+$");
        if(nameRegex.test(id)) {
            this._id = id;
        }
        else {
            throw "Invalid Id";
        }
    }

    get getGender() { return this._gender;}

    set setGender(gender1) {
        let nameRegex = RegExp("^[F|M]$");
        if(nameRegex.test(gender1.toUpperCase())) {
            this._gender = gender1;
        }
        else {
            throw 'Invalid Gender';
        }
    }

    get getSalary() { return _this.salary;}

    set setSalary(salary) {
        let nameRegex = RegExp('^[1-9]{1,}$');
        if(nameRegex.test(salary)) {
            this._salary = salary;
        }
        else {
            throw 'Invalid Salary';
        }
    }

    get getStartDate() { return this._startDate;}

    set setStartDate(startDate) {
        let currentDate = new Date();
        if(currentDate - startDate >= 0) {
            this._startDate = startDate;
        }
        else {
            throw 'Invalid Date';
        }
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
try{
    employeePayrollData.name = "John";
    console.log(employeePayrollData.toString());
}
catch(e){
    console.error(e);
}

try{
    //employeePayrollData.setId = 0;
    //employeePayrollData.setName = 'maxwell';
    //employeePayrollData.setGender = 'NA';
    employeePayrollData.setSalary = -2365;
    employeePayrollData.setStartDate = new Date();
    console.log(employeePayrollData);
}
catch(e) {
    console.error(e);
}

let newEmployeePayrollData = new EmployeePayrollData(2,"Terrisa",30000,"F",new Date());
console.log(newEmployeePayrollData.toString());


