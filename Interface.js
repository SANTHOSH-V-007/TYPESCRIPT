var Organization = /** @class */ (function () {
    function Organization(name, contact, address) {
        this.pName = name;
        this.pContact = contact;
        this.pAddress = address;
    }
    Organization.prototype.personDetails = function () {
        return "Name:".concat(this.pName, " Contact:").concat(this.pContact, " Address:").concat(this.pAddress);
    };
    return Organization;
}());
var organizationObj = new Organization("varun", 1234, "pune");
console.log(organizationObj.personDetails());
