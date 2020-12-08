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
empCheck = Math.floor(Math.random() * 10) % 3;
empHrs = getDailyWage(empCheck);
let empWage = empHrs * WORKING_RATE_PER_HOUR;
console.log("UC3 - Employee Salary : " + empWage);

//UC4 -> Compute EMployee Wage for a month assuming 20 days in a month
const NUM_WORKING_DAYS = 20;
empHrs = 0;

for (let day = 0 ; day < NUM_WORKING_DAYS ; day++){
    empCheck = Math.floor(Math.random() * 10) % 3;
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
    empCheck = Math.floor(Math.random() * 10) % 3;
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
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();

while(totalEmpHrs <= MAX_WORKING_HRS && totalWorkingDays < MAX_WORKING_DAYS){
    totalWorkingDays++;
    empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs = getDailyWage(empCheck);
    let dailyWage = calculateDailyWage(empHrs);
    empWageArray.push(dailyWage);
    empDailyWageMap.set(totalWorkingDays,dailyWage);
    empDailyHrsMap.set(totalWorkingDays,empHrs);
    totalEmpHrs += empHrs;
}

empWage = calculateDailyWage(totalEmpHrs);
console.log("UC 6 - Total Days : " + totalWorkingDays + " Total Hours : " + totalEmpHrs + " EMp Wage : " + empWage);

//UC7 --> Array Helper Functions

//UC 7-A - Calculate Total Wage using Array forEach Traversal or reduce method
let totalEmpWage = 0;
function sum(dailyWage){
    totalEmpWage += dailyWage;
}

empWageArray.forEach(sum);
console.log("UC-7A -  Total Days : " + totalWorkingDays + " Total Hrs : " + totalEmpHrs + " Emp Wage : " + totalEmpWage);

function totalWages(totalWage , dailyWage){
    return totalWage+dailyWage;
}

console.log("UC-7A - Total Employee Wage Using Reduce Method : " + empWageArray.reduce(totalWages,0));

//UC 7B -> Show the day along with daily wage using Array map helper functions
let dailyCounter = 0;
function mapDayWithWage(dailyWage){
    dailyCounter++;
    return dailyCounter + " = " + dailyWage;
}

let mapDayWithWageArray = empWageArray.map(mapDayWithWage);
console.log("UC7B - Daily Wage Map");
console.log(mapDayWithWageArray);

//UC 7C -> Show Days when Full Time wage of 160 were earned
function fullTimeWage(dailyWage){
    return dailyWage.includes("160");
}

let fullDayWageArr = mapDayWithWageArray.filter(fullTimeWage);
console.log("UC-7C -> Daily Wage filter when full time earned");
console.log(fullDayWageArr);

//UC - 7D -> Find the first occurence when full time wage was earned using find function
function findFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}

console.log("UC - 7D -> First Time Full time Wage was earned on Day : " + mapDayWithWageArray.find(findFullTimeWage));

//UC - 7E -> Check if every element of full time wage is truely holding full time wage
function isAllFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}

console.log("UC - 7E ->Check all element have full time wages : " + fullDayWageArr.every(isAllFullTimeWage));

// UC - 7F -> Check if there is any part time wage
function isAnyPartTimeWage(dailyWage){
    return dailyWage.includes("80");
}

console.log("UC - 7F -> Check if any part time wage : " + mapDayWithWageArray.some(isAnyPartTimeWage));

//UC - 7G -> Find the number of days the employee have worked
function totalDaysWorked(numOfDays , dailyWage){
    if(dailyWage > 0) return numOfDays +1;
    return numOfDays;
}

console.log("UC - 7G -> Number of Days Employee Worked : " + empWageArray.reduce(totalDaysWorked,0));

//UC - 8 ->
let totalEmpMapWage = 0;

for(let empWage of empDailyWageMap.values()){
    totalEmpMapWage += empWage;
}
console.log(empDailyWageMap);
console.log("UC - 8 ->  Total Emp Wage from Map : " + totalEmpMapWage)

//UC 9 -> Arrow Functions
const findTotal = (totalVal,dailyVal) => {
    return totalVal+dailyVal;
}

let count = 0;
let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal,0);
let totalSalary = empWageArray.filter(dailyWage => dailyWage > 0) .reduce(findTotal,0);
console.log("UC - 9A - Employee Wage with arrow : " + " Total Hours : " + totalHours + " Total Wages : " + totalSalary);

let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();

empDailyHrsMap.forEach( (value,key,map) => {
    if(value == 8) fullWorkingDays.push(key);
    else if (value == 4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});

console.log("Full Working Days : " + fullWorkingDays);
console.log("Part Working Days : " + partWorkingDays);
console.log("Non Working Days : " + nonWorkingDays);


//UC 10 -> Object creation
totalEmpHrs = 0;
totalWorkingDays = 0;
let empDailyHrsAndWageArr = new Array();

while(totalEmpHrs <= MAX_WORKING_HRS && totalWorkingDays < MAX_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getDailyWage(empCheck);
    totalEmpHrs += empHrs;
    empDailyHrsAndWageArr.push(
        {
            dayNum : totalWorkingDays,
            dailyHours : empHrs,
            dailyWage : calculateDailyWage(empHrs),
            toString(){
                return '\nDay' + this.dayNum + ' => Working Hours is ' +  this.dailyHours + ' And Wage Earned = ' + this.dailyWage;
            },
        }
    );
}

console.log("UC 10 Showing Daily Hours Worked and Wage Earned : " + empDailyHrsAndWageArr);


// UC 11 -> Object Operations using Arrow Functions

totalWages = empDailyHrsAndWageArr
             .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
             .reduce((totalWage,dailyHrsAndWage) => totalWage += dailyHrsAndWage.dailyWage , 0);

totalHours = empDailyHrsAndWageArr
             .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
             .reduce((totalHours,dailyHrsAndWage) => totalHours += dailyHrsAndWage.dailyHours , 0);

console.log("UC 11 A Total Hours : " + totalHours + " Total Wages : " +totalWages);

process.stdout.write("UC 11B Logging Full Work Days");

empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8)
                     .forEach(dailyHrsAndWage => process.stdout.write(dailyHrsAndWage.toString()));

let partWorkingDayStrArr = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4)
                                                .map(dailyHrsAndWage => process.stdout.write(dailyHrsAndWage.toString()));

console.log("\nUC 11 C -> Part WorkingDay STring : " + partWorkingDayStrArr);

let nonWorkingDayStrArr = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 0)
                                                .map(dailyHrsAndWage => process.stdout.write(dailyHrsAndWage.toString()));

console.log("\nUC 11 D ->Non WorkingDay STring : " + nonWorkingDayStrArr);


