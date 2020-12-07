//UC1
const IS_ABSENT = 0;

let empCheck = Math.floor(Math.random() * 10) % 2;
if(empCheck == IS_ABSENT){
    console.log("UC1 - Employee is Absent");
}
else{
    console.log("UC1 - Employee Is Present");
}


//UC2 -->Calculate Daily Wage for Fulltime and parttime employee

const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WORKING_RATE_PER_HOUR = 20;

let empHrs = 0;
empCheck = Math.floor(Math.random() * 10) % 3;
switch(empCheck){
    case IS_PART_TIME:
        empHrs = PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        empHrs = FULL_TIME_HOURS;
        break;
    default:
        empHrs = 0;
        break;
}

let salary = empHrs*WORKING_RATE_PER_HOUR;
console.log("UC2 - Employee Salary : " + salary);

//UC3 --> Calcluate Employee Daily Wage using Functions

function getDailyWage(empCheck){
    switch(empCheck){
        case IS_PART_TIME :
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

empHrs = 0;
empCheck = Math.floor(Math.random() * 10) % 2;
empHrs = getDailyWage(empCheck);
let empWage = empHrs * WORKING_RATE_PER_HOUR;
console.log("UC3 - Employee Salary : " + empWage);

//UC4 -> Compute EMployee Wage for a month assuming 20 days in a month
const NUM_WORKING_DAYS = 20;
empHrs = 0;

for (let day = 0 ; day < NUM_WORKING_DAYS ; day++){
    empCheck = Math.floor(Math.random() * 10) % 2;
    empHrs += getDailyWage(empCheck);
}
empWage = empHrs*WORKING_RATE_PER_HOUR;
console.log("UC4 - Employee Wage for a month : " + empWage)

//UC5 --> Compute employee wage till max working hours or max working days is reached
const MAX_WORKING_HRS = 160;
const MAX_WORKING_DAYS = 20;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
while(totalEmpHrs <= MAX_WORKING_HRS && totalWorkingDays <= MAX_WORKING_DAYS){
    totalWorkingDays++;
    empCheck = Math.floor(Math.random() * 10) % 2;
    totalEmpHrs += getDailyWage(empCheck);
}
empWage = totalEmpHrs * WORKING_RATE_PER_HOUR;
console.log("UC5 - Employee Wage till max working hrs or max working days is reached: " + empWage);

//UC6 --> Calculate Daily Wage in Array
function calculateDailyWage(empHrs){
    return empHrs * WORKING_RATE_PER_HOUR;
}

totalEmpHrs = 0;
totalWorkingDays = 0;
let empWageArray = new Array();

while(totalEmpHrs <= MAX_WORKING_HRS && totalWorkingDays < MAX_WORKING_DAYS){
    totalWorkingDays++;
    empCheck = Math.floor(Math.random() * 10) % 2;
    empHrs = getDailyWage(empCheck);
    let dailyWage = calculateDailyWage(empHrs);
    empWageArray.push(dailyWage);
    totalEmpHrs += empHrs;
}

empWage = calculateDailyWage(totalEmpHrs);
console.log("UC 6 - Total Days : " + totalWorkingDays + " Total Hours : " + totalEmpHrs + " EMp Wage : " + empWage);