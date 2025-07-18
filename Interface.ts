

interface Iperson{
    personDetails();
}

class Organization implements Iperson{
    pName:string;
    pContact:number;
    pAddress:string;

    constructor(name:string,contact:number,address:string){
        this.pName=name;
        this.pContact=contact;
        this.pAddress=address;
    }

    personDetails() {
        return `Name:${this.pName} Contact:${this.pContact} Address:${this.pAddress}`
    }

}
let organizationObj = new Organization("varun",1234,"pune");
console.log(organizationObj.personDetails());