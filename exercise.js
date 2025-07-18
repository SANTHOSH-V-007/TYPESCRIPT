var EmployeeSalary = /** @class */ (function () {
    function EmployeeSalary(EmployeeId, EmployeeName, BasicSalary) {
        this.EmployeeId = EmployeeId;
        this.EmployeeName = EmployeeName;
        this.BasicSalary = BasicSalary;
    }
    EmployeeSalary.prototype.HRA = function () {
        return 0.20 * this.BasicSalary;
    };
    EmployeeSalary.prototype.DA = function () {
        return 0.10 * this.BasicSalary;
    };
    EmployeeSalary.prototype.GrossSalary = function () {
        var HRA = this.HRA();
        var DA = this.DA();
        return this.BasicSalary + HRA + DA;
    };
    EmployeeSalary.prototype.displayDetails = function () {
        var HRA = this.HRA();
        var DA = this.DA();
        var GrossSalary = this.GrossSalary();
        console.log("-- Employee salary Details --");
        console.log("Employee ID: ".concat(this.EmployeeId));
        console.log("Employee Name: ".concat(this.EmployeeName));
        console.log("Basic Salary: ".concat(this.BasicSalary));
        console.log("HRA: ".concat(HRA));
        console.log("DA: ".concat(DA));
        console.log("Gross Salary: ".concat(GrossSalary));
    };
    return EmployeeSalary;
}());
var employee = new EmployeeSalary(101, "John Doe", 50000);
employee.displayDetails();
