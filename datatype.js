console.log("welcome u all");
//1. String data type.
var myName = "santhosh";
console.log(myName);
//2. number data type.
var no1 = 10000, no2 = 0.5, no3 = 1234;
console.log(no1 + " " + no2 + " " + no3);
//3. boolean data type
var cond1 = true, cond2 = false;
console.log(cond1 + " " + cond2);
//4.array data type
var course = ["React", "Angular", "Java", "Python"];
var breakfast = ["Idli", "dosa", "vada"];
console.log(course);
console.log(breakfast);
//5. tuple data type : we can store multiple data with different data type in an array.
var item = ["samosa", 30];
console.log(item);
//6. enum: it is create constant variable with fix value.
var days;
(function (days) {
    days[days["sun"] = 101] = "sun";
    days[days["mon"] = 102] = "mon";
    days[days["tue"] = 103] = "tue";
    days[days["wed"] = 104] = "wed";
    days[days["thu"] = 105] = "thu";
    days[days["fri"] = 106] = "fri";
    days[days["sat"] = 107] = "sat";
})(days || (days = {}));
;
var data1 = days.sun;
console.log(days);
console.log(data1);
//7. union: it allows us to store value with different data type.
var information = "changepond";
console.log(information);
//8. any: when we don't what information is going to be store in variable.
var data = 1234;
console.log(data);
