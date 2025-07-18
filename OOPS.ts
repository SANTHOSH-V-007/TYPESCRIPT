
class Employee{
    //data-member
    protected eId:number=101;
    eName:string="santhosh";
    esalary:number=98763;
    esingle:boolean=false;
    private aadharNo: number = 1234;


    // create constructor
    constructor(id:number,name:string,salary:number,isSingle:boolean){
        this.eId=id;
        this.eName=name;
        this.esalary=salary;
        this.esingle=isSingle;
    }
    

    //member-function
    employeeDetails(){
        return `Id:${this.eId} Name:${this.eName} Salary:${this.esalary} Single:${this.esingle} `
    }
}

//how to create object of class 
// let empObj = new Employee();
// console.log(empObj.eName);
// console.log(empObj.employeeDetails());

//for outside the class constructor object
// let empObj1 = new Employee(103,"sanjay",9000,true);
// console.log(empObj1.eName);
// console.log(empObj1.employeeDetails());

//Inheritance
class Company extends Employee{
    cname:string;
    caddress:string;

    constructor(id:number,name:string,salary:number,single:boolean,compName:string,compAddr:string){
        super(id,name,salary,single);
        this.cname=compName;
        this.caddress=compAddr;
    }

    employeeDetails(){
        return `id:${this.eId} Name:${this.eName} Salary:${this.esalary} Single:${this.esingle} Company Name:${this.cname} Address:${this.caddress}`
    }
};

let CompanyObj = new Company(201,"Priya",95000,false,"wipro","chennai");
console.log(CompanyObj.employeeDetails());