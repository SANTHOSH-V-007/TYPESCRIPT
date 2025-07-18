
export let myFullName:string="santhosh";

export class Product{
    pId:number;
    pName:NamedCurve;
    pPrice:number;

    constructor(id:number,name:string,price:number){
        this.pId=id;
        this.pName=name;
        this.pPrice=price;
    }
    productDetails(){
        return `Id:${this.pId} Name:${this.pName} Price:${this.pPrice}`
    }

}