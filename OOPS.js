var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    // create constructor
    function Employee(id, name, salary, isSingle) {
        //data-member
        this.eId = 101;
        this.eName = "santhosh";
        this.esalary = 98763;
        this.esingle = false;
        this.eId = id;
        this.eName = name;
        this.esalary = salary;
        this.esingle = isSingle;
    }
    //member-function
    Employee.prototype.employeeDetails = function () {
        return "Id:".concat(this.eId, " Name:").concat(this.eName, " Salary:").concat(this.esalary, " Single:").concat(this.esingle, " ");
    };
    return Employee;
}());
//how to create object of class 
// let empObj = new Employee();
// console.log(empObj.eName);
// console.log(empObj.employeeDetails());
//for outside the class constructor object
// let empObj1 = new Employee(103,"sanjay",9000,true);
// console.log(empObj1.eName);
// console.log(empObj1.employeeDetails());
var Company = /** @class */ (function (_super) {
    __extends(Company, _super);
    function Company(id, name, salary, single, compName, compAddr) {
        var _this = _super.call(this, id, name, salary, single) || this;
        _this.cname = compName;
        _this.caddress = compAddr;
        return _this;
    }
    Company.prototype.employeeDetails = function () {
        return "id:".concat(this.eId, " Name:").concat(this.eName, " Salary:").concat(this.esalary, " Single:").concat(this.esingle, " Company Name:").concat(this.cname, " Address:").concat(this.caddress);
    };
    return Company;
}(Employee));
;
var CompanyObj = new Company(201, "Priya", 95000, false, "wipro", "chennai");
console.log(CompanyObj.employeeDetails());
