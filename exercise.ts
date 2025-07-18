class EmployeeSalary {
     EmployeeId: number;
     EmployeeName: string;
     BasicSalary: number;

    constructor(EmployeeId: number, EmployeeName: string, BasicSalary: number) {
        this.EmployeeId = EmployeeId;
        this.EmployeeName = EmployeeName;
        this.BasicSalary = BasicSalary;
    }

    HRA(): number {
        return 0.20 * this.BasicSalary; 
    }
    DA(): number {
        return 0.10 * this.BasicSalary; 
    }
    GrossSalary(): number {
        const HRA = this.HRA();
        const DA = this.DA();
        return this.BasicSalary + HRA + DA; 
    }

    public displayDetails() {
        const HRA = this.HRA();
        const DA = this.DA();
        const GrossSalary = this.GrossSalary();

        console.log("-- Employee salary Details --")
        console.log(`Employee ID: ${this.EmployeeId}`);
        console.log(`Employee Name: ${this.EmployeeName}`);
        console.log(`Basic Salary: ${this.BasicSalary}`);
        console.log(`HRA: ${HRA}`);
        console.log(`DA: ${DA}`);
        console.log(`Gross Salary: ${GrossSalary}`);
    }
}

const employee = new EmployeeSalary(101, "Santhosh", 50000);
employee.displayDetails();
