var student = /** @class */ (function () {
    function student() {
    }
    student.prototype.getStudentname = function () {
        return "Student_name: " + this.name;
    };
    student.prototype.setStudentname = function (stdname) {
        return this.name = stdname;
    };
    student.prototype.getStudentRollno = function () {
        return "Student_Rollno: " + this.rollno;
    };
    student.prototype.setStudentRollno = function (num) {
        return this.rollno = num;
    };
    student.prototype.getStudentmarks = function () {
        return "Student_marks: " + this.marks;
    };
    student.prototype.setStudentmarks = function (mark) {
        this.marks = mark;
    };
    student.prototype.calculateTotal = function () {
        var Total_mark = 0;
        for (var _i = 0, _a = this.marks; _i < _a.length; _i++) {
            var mark = _a[_i];
            Total_mark += mark;
        }
        return Total_mark;
    };
    student.prototype.calculateAverage = function () {
        return this.calculateTotal() / this.marks.length;
    };
    student.prototype.calculateGrade = function () {
        if (this.calculateAverage() >= 90) {
            return "Grade:A+";
        }
        else if (this.calculateAverage() >= 80) {
            return "Grade:A";
        }
        else if (this.calculateAverage() >= 70) {
            return "Grade:B+";
        }
        else if (this.calculateAverage() >= 60) {
            return "Grade:B";
        }
        else if (this.calculateAverage() >= 50) {
            return "Grade:C";
        }
        else {
            return "Grade:D";
        }
    };
    return student;
}());
var array = [93, 78, 87];
var std = new student();
std.setStudentname("santhosh");
std.setStudentRollno(101);
std.setStudentmarks(array);
console.log(std.getStudentname());
console.log(std.getStudentRollno());
console.log(std.getStudentmarks());
console.log("Total: " + std.calculateTotal());
console.log("Avg: " + std.calculateAverage());
console.log(std.calculateGrade());
