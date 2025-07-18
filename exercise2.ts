interface StudentDetails{
    name:string,
    rollno:number,
    marks:number[];
    calculateTotal(): number;
    calculateAverage(): number;
    calculateGrade(): string;
}
class student implements StudentDetails{
    name: string;
    rollno: number;
    marks: number[];

    getStudentname():string{
     return "Student_name: " +this.name;
    }
    setStudentname(stdname:string):string{
      return this.name = stdname;
    }

    getStudentRollno(): any{
     return "Student_Rollno: " + this.rollno;
    }
    setStudentRollno(num:number):number{
      return this.rollno = num;
    }

    getStudentmarks(): any{
     return "Student_marks: " + this.marks;
    }
    setStudentmarks(mark:number[]):any{
      this.marks=mark
    }

    calculateTotal(): number {
        let Total_mark=0
        for (let mark of this.marks){
            Total_mark+=mark
    }
    return  Total_mark
    }

    calculateAverage(): number {
          return this.calculateTotal()/this.marks.length;
    }

    calculateGrade(): string {
        if (this.calculateAverage()>=90){
        return "Grade:A+"
     }else if (this.calculateAverage()>=80){
        return "Grade:A"
     }
     else if (this.calculateAverage()>=70){
        return "Grade:B+"
     }
     else if (this.calculateAverage()>=60){
        return "Grade:B"
     }
     else if(this.calculateAverage()>=50){
        return "Grade:C"
     }else{
        return "Grade:D"
     }
    }
}
let array=[93,78,87]
let std =new student();
std.setStudentname("santhosh")
std.setStudentRollno(101)
std.setStudentmarks(array)
console.log(std.getStudentname())
console.log(std.getStudentRollno())
console.log(std.getStudentmarks())
console.log("Total: "+std.calculateTotal())
console.log("Avg: "+ std.calculateAverage())
console.log(std.calculateGrade())