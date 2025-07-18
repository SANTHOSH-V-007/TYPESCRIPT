var BankDetails = /** @class */ (function () {
    function BankDetails(AccountNo, Holdername, Balance) {
        this.AccountNo = AccountNo;
        this.Holdername = Holdername;
        this.Balance = Balance;
    }
    BankDetails.prototype.getBankDetails = function () {
        return "Account_number: ".concat(this.AccountNo, ", HolderName: ").concat(this.Holdername, ", Balance: ").concat(this.Balance);
    };
    BankDetails.prototype.AmountDeposit = function (amt) {
        this.Balance = this.Balance + amt;
    };
    BankDetails.prototype.AmountWithDraw = function (amt) {
        if (amt < this.Balance) {
            this.Balance = this.Balance - amt;
        }
        else {
            console.log("amount Invalid");
        }
    };
    return BankDetails;
}());
var bank = new BankDetails('8644567654', 'santhosh', 20000);
bank.AmountDeposit(5000);
bank.AmountWithDraw(2000);
console.log(bank.getBankDetails());
