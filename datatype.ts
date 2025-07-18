console.log("welcome u all");

//1. String data type.
let myName:string = "santhosh";
console.log(myName);

//2. number data type.
let no1:number=10000,no2:number=0.5,no3:number=1234;
console.log(no1+" " +no2+" "+ no3);

//3. boolean data type
let cond1:boolean=true,cond2:boolean=false;
console.log(cond1 +" "+cond2);

//4.array data type
let course:string[]=["React","Angular","Java","Python"];
let breakfast:Array<string> = ["Idli","dosa","vada"];
console.log(course);
console.log(breakfast);

//5. tuple data type : we can store multiple data with different data type in an array.
let item:[string,number] = ["samosa",30];
console.log(item);

//6. enum: it is create constant variable with fix value.
enum days{sun=101,mon,tue,wed,thu,fri,sat};
let data1=days.sun;
console.log(days);
console.log(data1);

//7. union: it allows us to store value with different data type.
let information:string | number = "changepond";
console.log(information);

//8. any: when we don't what information is going to be store in variable.
let data:any = 1234;
console.log(data);

