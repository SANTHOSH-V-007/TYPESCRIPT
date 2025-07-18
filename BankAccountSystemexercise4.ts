class BankDetails{
    constructor(
    public AccountNo: string,
    public Holdername: string,
    private Balance:number
  ) {}
  getBankDetails(): string {
    return `Account_number: ${this.AccountNo}, HolderName: ${this.Holdername}, Balance: ${this.Balance}`;
  }
  AmountDeposit(amt:number):void{
 this.Balance=this.Balance+amt
}
  AmountWithDraw(amt:number):void{
    if (amt<this.Balance)
    {
        this.Balance=this.Balance-amt
    }else{
    console.log("amount Invalid")
    }
}
 
}
let bank=new BankDetails('8644567654','santhosh',20000);
bank.AmountDeposit(5000);
bank.AmountWithDraw(2000);
console.log(bank.getBankDetails())